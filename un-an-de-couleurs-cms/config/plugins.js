module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dxrbb1vyn'),
        api_key: env('625341731273515'),
        api_secret: env('HxK7IYEgc0W1MGBTJ4vChdrzuOE'),
      },
    },
});