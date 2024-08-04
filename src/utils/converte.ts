import { marked } from 'marked';

export function html2txt(htmlString: string) {
  const tagRegEx = /(<([^>]+)>)/gi;
  return htmlString.replace(tagRegEx, '');
}

export function md2html(mdString: string) {
  return marked.parse(mdString) as string;
}

export function md2txt(mdString: string) {
  return html2txt(md2html(mdString));
}
