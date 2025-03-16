<template>
	<div class="diagram-container">
		<svg
			width="650"
			height="300"
			viewBox="0 0 650 300"
			xmlns="http://www.w3.org/2000/svg"
		>
			<!-- Function Declaration Box -->
			<rect
				x="0"
				y="50"
				width="600"
				height="200"
				rx="10"
				fill="#f8f9fa"
				stroke="#3298dc"
				stroke-width="2"
			/>

			<!-- Function Keyword -->
			<text x="30" y="85" fill="#363636" font-family="monospace" font-size="16">
				function
			</text>

			<!-- Function Name -->
			<text
				x="120"
				y="85"
				fill="#2f855a"
				font-family="monospace"
				font-size="16"
				font-weight="bold"
			>
				calculateTotal
			</text>

			<!-- Parameters -->
			<rect
				x="275"
				y="65"
				width="150"
				height="30"
				rx="5"
				fill="#ebf8ff"
				stroke="#3298dc"
				stroke-width="1"
			/>
			<text x="280" y="85" fill="#363636" font-family="monospace" font-size="14">
				(price, quantity)
			</text>

			<!-- Function Body -->
			<rect
				x="70"
				y="110"
				width="360"
				height="120"
				rx="5"
				fill="#ffffff"
				stroke="#3298dc"
				stroke-dasharray="4"
				stroke-width="1"
			/>
			<text x="90" y="140" fill="#363636" font-family="monospace" font-size="14">
				{
			</text>
			<text
				x="90"
				y="170"
				fill="#363636"
				font-family="monospace"
				font-size="14"
			>
				return price * quantity;
			</text>
			<text x="90" y="200" fill="#363636" font-family="monospace" font-size="14">
				}
			</text>

			<!-- Labels -->
			<text
				x="440"
				y="85"
				fill="#718096"
				font-family="sans-serif"
				font-size="12"
			>
				Parameters
			</text>
			<text
				x="440"
				y="170"
				fill="#718096"
				font-family="sans-serif"
				font-size="12"
			>
				Function Body
			</text>
		</svg>
	</div>
</template>

<script setup>
// No props or logic needed for this static diagram
</script>

<script>
export default {
    name: 'FunctionBasicsDiagram'
}
</script>

<style scoped>
.diagram-container {
	width: 100%;
	max-width: 650px;
	margin: 2rem auto;
}
</style> 