export default async function handler(_, res) {
    const statsResponse = await fetch('https://wordpress.org/plugins/wp-json/wp/v2/plugin/137879');
  
    const stats = await statsResponse.json();
  
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );
  
    return res.status(200).json({
        active_installs: stats.meta.active_installs,
        downloads: stats.meta.downloads,
        version: stats.meta.version,
    });
  }