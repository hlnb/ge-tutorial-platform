<template>
	<div class="diagram-container">
		<svg
			width="600"
			height="400"
			viewBox="0 0 600 400"
			xmlns="http://www.w3.org/2000/svg"
		>
			<!-- Regular Function -->
			<text x="50" y="40" fill="#363636" font-size="16" font-weight="bold">
				Regular Function
			</text>
			<rect
				x="50"
				y="60"
				width="500"
				height="120"
				rx="8"
				fill="#f8f9fa"
				stroke="#3298dc"
				stroke-width="2"
			/>
			<text x="70" y="90" fill="#363636" font-family="monospace" font-size="14">
				function add(a, b) {
			</text>
			<text x="90" y="120" fill="#363636" font-family="monospace" font-size="14">
				return a + b;
			</text>
			<text x="70" y="150" fill="#363636" font-family="monospace" font-size="14">
				}
			</text>

			<!-- Arrow indicating transformation -->
			<path
				d="M300 200 L300 240"
				stroke="#4a5568"
				stroke-width="2"
				marker-end="url(#arrowhead)"
			/>
			<text x="320" y="220" fill="#4a5568" font-family="sans-serif" font-size="14">
				Converts to
			</text>

			<!-- Arrow Function -->
			<text x="50" y="280" fill="#363636" font-size="16" font-weight="bold">
				Arrow Function
			</text>
			<rect
				x="50"
				y="300"
				width="500"
				height="60"
				rx="8"
				fill="#f0fdf4"
				stroke="#2f855a"
				stroke-width="2"
			/>
			<text x="70" y="335" fill="#2f855a" font-family="monospace" font-size="14">
				const add = (a, b) => a + b;
			</text>

			<!-- Highlights -->
			<g class="highlights">
				<!-- Arrow syntax highlight -->
				<rect
					x="270"
					y="320"
					width="30"
					height="25"
					fill="#9ae6b4"
					opacity="0.3"
					rx="4"
				/>
				<text x="270" y="380" fill="#2f855a" font-family="sans-serif" font-size="12">
					Arrow Syntax
				</text>

				<!-- Implicit return highlight -->
				<rect
					x="310"
					y="320"
					width="80"
					height="25"
					fill="#9ae6b4"
					opacity="0.3"
					rx="4"
				/>
				<text x="350" y="380" fill="#2f855a" font-family="sans-serif" font-size="12">
					Implicit Return
				</text>
			</g>

			<!-- Arrow Marker Definition -->
			<defs>
				<marker
					id="arrowhead"
					markerWidth="10"
					markerHeight="7"
					refX="9"
					refY="3.5"
					orient="auto"
				>
					<polygon points="0 0, 10 3.5, 0 7" fill="#4a5568" />
				</marker>
			</defs>
		</svg>
	</div>
</template>

<script setup>
// No props or logic needed for this static diagram
</script>

<script>
export default {
    name: 'ArrowFunctionDiagram'
}
</script>

<style scoped>
.diagram-container {
	width: 100%;
	max-width: 600px;
	margin: 2rem auto;
}

.highlights text {
	font-size: 12px;
}
</style> 