import 'regenerator-runtime';

const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.svg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

class CacheHelper {
  static async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  }

  static async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== 'restaurant-v1')
      .map((filteredName) => caches.delete(filteredName));
  }

  static async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  }

  static async _openCache() {
    return caches.open('restaurant-v1');
  }

  static async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  }

  static async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  }
}

export default CacheHelper;