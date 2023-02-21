import type { GatsbyConfig } from 'gatsby'
import { IPluginRefOptions } from 'gatsby'
import path from 'path'
import fs from 'fs'

const srcDirs = fs.readdirSync(path.resolve(__dirname, 'src'))
const rootDirsConfig: IPluginRefOptions = {}

srcDirs.forEach(srcDir => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir)
})

// @ts-ignore
srcDirs.forEach(srcDir => {
  // @ts-ignore
  rootDirsConfig[srcDir] = path.resolve(__dirname, 'src', srcDir)
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Call of Cthulhu Dealer`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: rootDirsConfig,
    },
  ],
}

export default config
