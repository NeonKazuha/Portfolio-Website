import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema, schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Protfolio',

  projectId: 'rkq2qggi',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
