<template>
  <AzureMap
    :center="[-122.33, 47.6]"
    class="AzureMap"
    subscription-key="M25GAPje7RDBbTJjFQWY1ts6OoBnDE8BIW4-0b-5dCo"
    @mousestart="hidePopup"
  >
    <AzureMapZoomControl />
    <AzureMapPitchControl />
    <AzureMapCompassControl />
    <AzureMapFullscreenControl />
    <AzureMapGeolocationControl />
    <AzureMapStyleControl />
    <AzureMapDataSource
      :external-source-url="'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'"
    >
      <AzureMapHeatMapLayer />
    </AzureMapDataSource>
    <AzureMapDataSource>
      <!-- Add Polygons to the Data Source -->
      <template v-for="point in points" :key="point.properties.name">
        <AzureMapCircle
          :longitude="point.longitude"
          :latitude="point.latitude"
          :radius="100000000"
        />
      </template>
      <!-- Add a Polygon Layer to render the Polygons stored in the Data Source -->
      <AzureMapPolygonLayer :options="polygonLayerOptions" />
    </AzureMapDataSource>
    <AzureMapDataSource
      :cluster="cluster"
      :cluster-radius="clusterRadius"
      :cluster-max-zoom="clusterMaxZoom"
    >
      <template v-for="point in points" :key="point.properties.name">
        <AzureMapPoint
          :longitude="point.longitude"
          :latitude="point.latitude"
          :properties="point.properties"
        />
      </template>

      <AzureMapPopup
        v-model="isPopupOpen"
        :position="popupPosition"
        :pixel-offset="popupPixelOffset"
        class="AzureMapPopup"
      >
        <template v-if="selectedPoint">
          <p>
            <strong>{{ selectedPoint.properties.name }}</strong>
          </p>
          <p>
            {{ selectedPoint.properties.description }}
          </p>
        </template>
      </AzureMapPopup>
      <AzureMapBubbleLayer
        :symbol-options="bubbleLayerOptions"
        @created="bubbleLayer = $event"
      />
      <AzureMapSymbolLayer :symbol-options="symbolLayerOptions" />
      <AzureMapSymbolLayer
        :symbol-options="shapeLayerOptions"
        @created="symbolLayer = $event"
      />
      <AzureMapSpiderClusterManager
        v-if="bubbleLayer && symbolLayer"
        :cluster-layer="bubbleLayer"
        :unclusted-layer="symbolLayer"
        @feature-selected="onFeatureSelected"
        @feature-unselected="onFeatureUnselected"
      />
    </AzureMapDataSource>
    <AzureMapDataSource>
      <!-- Add Polygons to the Data Source -->
      <AzureMapPolygon
        v-for="polygon in polygons"
        :key="polygon.name"
        :coordinates="polygon.coordinates"
      />
      <!-- Add a Polygon Layer to render the Polygons stored in the Data Source -->
      <AzureMapPolygonLayer :options="polygonLayerOptions" />
    </AzureMapDataSource>
  </AzureMap>
</template>

<script lang="ts">
import {
  AzureMap,
  AzureMapZoomControl,
  AzureMapFullscreenControl,
  AzureMapPitchControl,
  AzureMapCompassControl,
  AzureMapDataSource,
  AzureMapPoint,
  AzureMapCircle,
  AzureMapHeatMapLayer,
  AzureMapPolygonLayer,
  AzureMapPolygon,
  AzureMapPopup,
  AzureMapBubbleLayer,
  AzureMapSymbolLayer,
  AzureMapSpiderClusterManager,
  AzureMapGeolocationControl,
  AzureMapStyleControl,
} from '@/plugin'
import * as atlas from 'azure-maps-control'
import { defineComponent } from 'vue'

type CustomPoint = {
  longitude: number
  latitude: number
  properties: Record<string, unknown>
}

export default defineComponent({
  name: 'AzureMapSpiderClusterManagerExample',

  components: {
    AzureMap,
    AzureMapZoomControl,
    AzureMapFullscreenControl,
    AzureMapPitchControl,
    AzureMapCompassControl,
    AzureMapDataSource,
    AzureMapPoint,
    AzureMapPolygon,
    AzureMapCircle,
    AzureMapHeatMapLayer,
    AzureMapPolygonLayer,
    AzureMapPopup,
    AzureMapBubbleLayer,
    AzureMapSymbolLayer,
    AzureMapSpiderClusterManager,
    AzureMapGeolocationControl,
    AzureMapStyleControl,
  },

  data() {
    return {
      points: [] as CustomPoint[],
      mockPointSize: 100,

      bubbleLayer: null as atlas.layer.BubbleLayer | null,
      symbolLayer: null as atlas.layer.SymbolLayer | null,

      isPopupOpen: false,
      popupPosition: null as atlas.data.Position | null,
      popupPixelOffset: null as atlas.Pixel | null,

      selectedPoint: null as CustomPoint | null,

      // Tell the data source to cluster point data.
      cluster: true,
      // The radius in pixels to cluster points together.
      clusterRadius: 45,
      // The maximium zoom level in which clustering occurs.
      // If you zoom in more than this, all points are rendered as symbols.
      clusterMaxZoom: 15,
      polygonLayerOptions: {
        fillColor: 'green',
        opacity: 0.5,
      } as atlas.PolygonLayerOptions,
      bubbleLayerOptions: {
        // Scale the size of the clustered bubble based on the number of points inthe cluster.
        radius: [
          'step',
          ['get', 'point_count'],
          20, // Default of 20 pixel radius.
          100,
          30, // If point_count >= 100, radius is 30 pixels.
          750,
          40, // If point_count >= 750, radius is 40 pixels.
        ],

        // Change the color of the cluster based on the value on the point_cluster property of the cluster.
        color: [
          'step',
          ['get', 'point_count'],
          'rgba(0,255,0,0.8)', // Default to green.
          100,
          'rgba(255,255,0,0.8)', // If the point_count >= 100, color is yellow.
          750,
          'rgba(255,0,0,0.8)', // If the point_count >= 100, color is red.
        ],
        strokeWidth: 0,
        blur: 0.5,
        filter: ['has', 'point_count'], // Only rendered data points which have a point_count property, which clusters do.
      } as atlas.BubbleLayerOptions,

      shapeLayerOptions: {
        filter: ['!', ['has', 'point_count']], // Filter out clustered points from this layer.
      } as atlas.SymbolLayerOptions,
      polygons: [] as {
        name: string
        coordinates: atlas.data.Position[]
      }[],
      mockPolygonSize: 2,
      symbolLayerOptions: {
        iconOptions: {
          image: 'none', //Hide the icon image.
        },
        textOptions: {
          textField: '{point_count_abbreviated}',
          offset: [0, 0.4],
        },
      } as atlas.SymbolLayerOptions,
    }
  },

  mounted() {
    this.generateMockPoints()
    this.generateMockPolygons()
  },

  methods: {
    onFeatureSelected(
      shape: atlas.Shape,
      cluster: atlas.data.Feature<atlas.data.Point, unknown> | null
    ): void {
      // Look for the point based on a unique key
      const currentPoint = this.points.find(
        (point: CustomPoint) =>
          point.properties.name === shape.getProperties().name
      )

      if (currentPoint) {
        this.selectedPoint = currentPoint

        if (cluster) {
          this.showPopup(cluster.geometry.coordinates, [0, 0])
        } else {
          this.showPopup(
            shape.getCoordinates() as atlas.data.Position,
            [0, -20]
          )
        }
      }
    },

    onFeatureUnselected(): void {
      this.selectedPoint = null
      this.hidePopup()
    },

    showPopup(position: atlas.data.Position, pixelOffset: atlas.Pixel): void {
      this.isPopupOpen = true
      this.popupPosition = position
      this.popupPixelOffset = pixelOffset
    },

    hidePopup(): void {
      this.isPopupOpen = false
      this.popupPosition = null
      this.popupPixelOffset = null
    },

    generateMockPoints(): void {
      // Generate a bunch of points with random coordinates
      for (let i = 0; i < this.mockPointSize; i++) {
        this.points.push({
          longitude: this.generateRandomLongitude(),
          latitude: this.generateRandomLatitude(),
          properties: {
            name: `Point-${i}`,
            description: `This is a popup for Point-${i}.`,
          },
        })
      }
    },
    generateMockPolygons(): void {
      // Generate a bunch of polygons with random coordinates
      for (let i = 0; i < this.mockPolygonSize; i++) {
        this.polygons.push({
          name: `Polygon-${i}`,
          coordinates: [
            [this.generateRandomLongitude(), this.generateRandomLatitude()],
            [this.generateRandomLongitude(), this.generateRandomLatitude()],
            [this.generateRandomLongitude(), this.generateRandomLatitude()],
            [this.generateRandomLongitude(), this.generateRandomLatitude()],
            [this.generateRandomLongitude(), this.generateRandomLatitude()],
          ],
        })
      }
    },

    generateRandomLongitude(): number {
      return Math.random() * 360 - 180
    },

    generateRandomLatitude(): number {
      return Math.random() * 170 - 85
    },
  },
})
</script>

<style scoped>
.AzureMap {
  width: 100%;
  height: 100%;
}

.AzureMapPopup {
  max-width: 200px;
  padding: 1rem;
}
</style>
