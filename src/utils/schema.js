const SITE_NAME = "GraphiteEdge";
const SITE_URL = "https://graphitedge.com.au";
const DEFAULT_AUTHOR = "Helen Burgess";

function cleanSchemaValue(value) {
  if (Array.isArray(value)) {
    const cleanedArray = value
      .map((item) => cleanSchemaValue(item))
      .filter((item) => item !== undefined);

    return cleanedArray.length ? cleanedArray : undefined;
  }

  if (value && typeof value === "object") {
    const cleanedObject = Object.entries(value).reduce((result, [key, item]) => {
      const cleanedItem = cleanSchemaValue(item);

      if (cleanedItem !== undefined) {
        result[key] = cleanedItem;
      }

      return result;
    }, {});

    return Object.keys(cleanedObject).length ? cleanedObject : undefined;
  }

  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return value;
}

function cleanSchema(schema) {
  return cleanSchemaValue(schema) || {};
}

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function normalizePath(path = "/") {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function createPersonSchema(name = DEFAULT_AUTHOR) {
  return {
    "@type": "Person",
    name,
  };
}

function createPublisherSchema() {
  return {
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function getTutorialUrl(tutorial = {}) {
  if (tutorial.url) return absoluteUrl(tutorial.url);
  if (tutorial.slug) return absoluteUrl(`/tutorials/${tutorial.slug}`);
  if (tutorial.path) return absoluteUrl(tutorial.path);
  return SITE_URL;
}

function getKeywords(source = {}) {
  const keywords = source.keywords ?? source.tags;
  return Array.isArray(keywords) ? keywords.join(", ") : keywords;
}

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${normalizePath(path)}`;
}

export function createOrganizationSchema() {
  return cleanSchema({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
  });
}

export function createWebsiteSchema() {
  return cleanSchema({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: createPublisherSchema(),
    inLanguage: "en-AU",
  });
}

export function createBreadcrumbSchema(items = []) {
  const itemListElement = asArray(items)
    .map((item, index) => {
      const name = typeof item === "string" ? item : item.name || item.title;
      const itemPath =
        typeof item === "string" ? null : item.item || item.url || item.path;

      return cleanSchema({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: itemPath ? absoluteUrl(itemPath) : undefined,
      });
    })
    .filter((item) => item.name);

  return cleanSchema({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  });
}

export function createTutorialSchema(tutorial = {}) {
  const title = tutorial.title || tutorial.name || "GraphiteEdge tutorial";
  const description =
    tutorial.description ||
    tutorial.summary ||
    "A practical GraphiteEdge web development tutorial.";
  const author = tutorial.author || DEFAULT_AUTHOR;
  const datePublished = tutorial.datePublished || tutorial.publishDate || tutorial.date;
  const dateModified = tutorial.dateModified || tutorial.updatedDate || datePublished;
  const url = getTutorialUrl(tutorial);

  return cleanSchema({
    "@context": "https://schema.org",
    "@type": ["TechArticle", "LearningResource"],
    headline: title,
    name: title,
    description,
    url,
    mainEntityOfPage: url,
    author: createPersonSchema(author),
    publisher: createPublisherSchema(),
    datePublished,
    dateModified,
    keywords: getKeywords(tutorial),
    articleSection: tutorial.sectionTitle || tutorial.section,
    educationalLevel:
      tutorial.educationalLevel || tutorial.levelTitle || tutorial.difficulty,
    learningResourceType: "Tutorial",
    teaches: tutorial.learningObjectives || tutorial.objectives,
    about: tutorial.topic || tutorial.pathway || tutorial.pathways,
    timeRequired: tutorial.timeRequired,
  });
}

export function createCourseSchema(course = {}) {
  const title = course.title || course.name || "GraphiteEdge course";
  const description =
    course.description ||
    course.summary ||
    "A structured GraphiteEdge web development learning pathway.";
  const url = course.url || course.path || (course.slug ? `/tutorials/${course.slug}` : "/tutorials");
  const lessons = asArray(course.lessons);

  return cleanSchema({
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: absoluteUrl(url),
    provider: createPublisherSchema(),
    educationalLevel: course.educationalLevel || course.levelTitle || course.level,
    keywords: getKeywords(course),
    teaches: course.learningObjectives || course.objectives,
    hasPart: lessons.map((lesson) =>
      cleanSchema({
        "@type": "LearningResource",
        name: lesson.title || lesson.name,
        url: getTutorialUrl(lesson),
      }),
    ),
  });
}
