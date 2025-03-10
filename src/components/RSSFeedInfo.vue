<template>
	<div class="rss-feed-info">
		<div class="box">
			<h3 class="title is-4">
				<i class="fas fa-rss"></i> Subscribe to Our RSS Feed
			</h3>
			<p class="mb-4">
				Stay updated with our latest articles and tutorials by subscribing to
				our RSS feed.
			</p>

			<div class="field is-grouped">
				<p class="control">
					<a href="/rss.xml" class="button is-primary">
						<span class="icon">
							<i class="fas fa-rss"></i>
						</span>
						<span>RSS Feed</span>
					</a>
				</p>

				<p class="control">
					<a
						href="https://feedly.com/i/subscription/feed/https://graphitedge.com.au/rss.xml"
						target="_blank"
						class="button is-light"
					>
						<span>Add to Feedly</span>
					</a>
				</p>
			</div>

			<div class="content mt-4">
				<h4 class="title is-5">What is RSS?</h4>
				<p>
					RSS (Really Simple Syndication) is a web feed that allows you to
					access updates to our website in a standardized, computer-readable
					format. By subscribing to our RSS feed, you'll receive notifications
					when we publish new content.
				</p>

				<h4 class="title is-5 mt-4">How to Use RSS</h4>
				<p>
					To subscribe to our RSS feed, you'll need an RSS reader. Here are some
					popular options:
				</p>
				<ul>
					<li>
						<a href="https://feedly.com" target="_blank">Feedly</a> - Web-based
						and mobile app
					</li>
					<li>
						<a href="https://www.inoreader.com" target="_blank">Inoreader</a> -
						Feature-rich reader
					</li>
					<li>
						<a href="https://newsblur.com" target="_blank">NewsBlur</a> - Social
						news reader
					</li>
					<li>
						<a href="https://netnewswire.com" target="_blank">NetNewsWire</a> -
						Open-source reader for Mac and iOS
					</li>
				</ul>

				<p>
					Simply copy our RSS feed URL
					(<code>https://graphitedge.com.au/rss.xml</code>) and add it to your
					preferred RSS reader.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RSSFeedInfo',
};
</script>

<style scoped>
.rss-feed-info {
	margin: 2rem 0;
}

.fas.fa-rss {
	color: #f26522;
}
</style>
