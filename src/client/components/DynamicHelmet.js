// @flow

import React from 'react'
import Helmet from 'react-helmet'

/**
 * Creates the array of meta tags
 * @param  {string} description
 * @param  {string} keywords
 */
const metaTags = (description: string, keywords: string) =>
  [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
  ]

/**
 * @type {Object}
 */
type Props = {
  title: string,
  description: string,
  keywords: string,
}

/**
 * Adds the meta content in the head tag
 * @param {Props} props
 */
export default (props: Props) =>
  <Helmet title={props.title} meta={metaTags(props.description, props.keywords)} />
