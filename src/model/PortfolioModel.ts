export interface PortfolioModel {
  title: string
  deskripsi: string
  image: string
  link: string
}

export interface FaqsModel {
  title: string
  deskripsi: string
}

export interface SeoOptions {
  title: string
  description: string
  image?: string
  type?: 'website' | 'video.movie' | 'article'
}
