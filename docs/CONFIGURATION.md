# Post Configuration

## Required Fields

title: string # Post title
slug: string # URL-friendly identifier
description: string # Brief post description
publishDate: string # ISO 8601 date format
status: string # 'draft', 'scheduled', or 'published'

## Optional Fields

author: string # Post author
tags: string[] # Array of related topics
readingTime: string # Estimated reading duration
lastUpdated: Date # Last modification date

## Example Configuration

const postMetadata = {
title: "DNS and Web Browsing",
slug: "dns-web-browsing",
description: "Understanding how DNS works...",
publishDate: "2024-04-01T09:00:00Z",
status: "scheduled",
author: "Graphitedge",
tags: ["DNS", "Web", "Networking"],
readingTime: "5 min"
};

# Image Configuration

## Directory Structure

public/
└── images/ # Public images (accessed via /images/...)
└── posts/ # Post-specific images

assets/
└── images/ # Asset images (require import)
└── posts/ # Post-specific images

## Usage in Posts

<!-- Public Image -->
<img src="/images/posts/dns-web-browsing.svg" alt="DNS Illustration">

<!-- Asset Image -->
<img :src="require('@/assets/images/posts/dns-web-browsing.svg')" alt="DNS Illustration">
