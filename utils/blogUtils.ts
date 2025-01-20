export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  
  export function getYouTubeEmbedUrl(url: string): string {
    const videoId = url.split("v=")[1]
    return `https://www.youtube.com/embed/${videoId}`
  }
  
  