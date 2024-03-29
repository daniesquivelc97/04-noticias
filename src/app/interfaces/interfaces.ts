interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

interface Source {
  id?: string;
  name: string;
}
