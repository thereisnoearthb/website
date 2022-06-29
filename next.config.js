module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tineb-test-sudipto-sudipto.vercel.app' }],
        destination: 'https://tineb-test-sudipto-sudipto.vercel.app/:path*',
        permanent: true
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'savebarak.thereisnoearthb.org' }],
        destination: 'https://thereisnoearthb.org/c/save-barak',
        permanent: true
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'onceuponawetland.thereisnoearthb.org' }],
        destination: 'https://thereisnoearthb.org/events/once-upon-a-wetland',
        permanent: true
      },
      {
        source: '/c/once-upon-a-wetland',
        destination: '/events/once-upon-a-wetland',
        permanent: false
      },
      {
        source: '/sukhna-lake/cleanup-236-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-236-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-238-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-238-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-240-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-240-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-243-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-243-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-247-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-247-chandigarh',
        permanent: false,
      },
      {
        source: '/sukhna-lake/cleanup-251-chandigarh.html',
        destination: '/events/sukhna-lake-cleanup-251-chandigarh',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/237-punya-farewell-plogging-party.html',
        destination: '/events/sanjay-vann-cleanup-237',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/241.html',
        destination: '/events/sanjay-vann-cleanup-241',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/244.html',
        destination: '/events/sanjay-vann-cleanup-244',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/248.html',
        destination: '/events/sanjay-vann-cleanup-248',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/252-geetika-vinamra.html',
        destination: '/events/sanjay-vann-cleanup-252',
        permanent: false,
      },
      {
        source: '/sanjay-vann/clean-up/256-getting-lost.html',
        destination: '/events/sanjay-vann-cleanup-256',
        permanent: false,
      },
      {
        source: '/lucknow/cleanup-245.html',
        destination: '/events/lucknow-cleanup-245',
        permanent: false,
      },
      {
        source: '/central-park/clean-up/2-yellow-bags-and-takeaways.html',
        destination: '/events/central-park-cleanup-2',
        permanent: false,
      },
      {
        source: '/ridge-reserve-forest/274-prakriti-delhi-college-of-arts-and-commerce/index.html',
        destination: '/events/ridge-reserve-forest-clean-up-274',
        permanent: false,
      },
      {
        source: '/ridge-reserve-forest/274-prakriti-delhi-college-of-arts-and-commerce',
        destination: '/events/ridge-reserve-forest-clean-up-274',
        permanent: false,
      },
      {
        source: '/ridge-reserve-forest/274-prakriti-delhi-college-of-arts-and-commerce/',
        destination: '/events/ridge-reserve-forest-clean-up-274',
        permanent: false,
      },
      {
        source: '/clean-up-treks/249-madhyamaheshwar-trek-kabir.html',
        destination: '/events/clean-up-treks-cleanup-249-madhyamaheshwar-trek',
        permanent: false,
      },
      {
        source: '/clean-up-treks/253-gidara-bugya-manas.html',
        destination: '/events/clean-up-treks-cleanup-253-gidara-bugyal',
        permanent: false,
      },
      {
        source: '/clean-up-treks/254-bir-billing-himachal-riti.html',
        destination: '/events/clean-up-treks-cleanup-254-bir-billing-himachal',
        permanent: false,
      },
      {
        source: '/yamuna-bank/Cleanup-234-Ashok-Kumar-Climate-Action-17-07-2021.html',
        destination: '/events/yamuna-bank-cleanup-234-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/cleanup-239-delhi.html',
        destination: '/events/yamuna-bank-cleanup-239-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/flying-to-mars-is-not-an-option-cleanup-235.html',
        destination: '/events/yamuna-bank-cleanup-235-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/cleanup-242-delhi.html',
        destination: '/events/yamuna-bank-cleanup-242-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/cleanup-246-delhi.html',
        destination: '/events/yamuna-bank-cleanup-246-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/cleanup-250-delhi.html',
        destination: '/events/yamuna-bank-cleanup-250-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/cleanup-255-delhi.html',
        destination: '/events/yamuna-bank-cleanup-255-delhi',
        permanent: false,
      },
      {
        source: '/yamuna-bank/images/Copy of Cleanup drive posters by Sania.png',
        destination: '/assets/events/yamuna-bank/images/Copy of Cleanup drive posters by Sania.png',
        permanent: false,
      },
      {
        source: '/cleanup-posters/:path*',
        destination: '/assets/cleanup-posters/:path*',
        permanent: false,
      },
      // {
      //   source: '/about-us',
      //   destination: '/about-us/index.html',
      //   permanent: false,
      // },
      // {
      //   source: '/about-us.html',
      //   destination: '/about-us/index.html',
      //   permanent: false,
      // },
      {
        source: '/apporpoise',
        destination: '/apporpoise/index.html',
        permanent: false,
      },
      {
        source: '/apporpoise.html',
        destination: '/apporpoise/index.html',
        permanent: false,
      },
      {
        source: '/blog',
        destination: '/blog/index.html',
        permanent: false,
      },
      {
        source: '/blog.html',
        destination: '/blog/index.html',
        permanent: false,
      },
      {
        source: '/aarna',
        destination: '/aarna/index.html',
        permanent: false,
      },
      {
        source: '/aarna.html',
        destination: '/aarna/index.html',
        permanent: false,
      },
      {
        source: '/anukriti_rashi',
        destination: '/anukriti_rashi/index.html',
        permanent: false,
      },
      {
        source: '/anukriti_rashi.html',
        destination: '/anukriti_rashi/index.html',
        permanent: false,
      },
      {
        source: '/bhawna',
        destination: '/bhawna/index.html',
        permanent: false,
      },
      {
        source: '/bhawna.html',
        destination: '/bhawna/index.html',
        permanent: false,
      },
      {
        source: '/cherry',
        destination: '/blog/index.html',
        permanent: false,
      },
      {
        source: '/cherry.html',
        destination: '/blog/index.html',
        permanent: false,
      },
      {
        source: '/dhrstadyumn',
        destination: '/dhrstadyumn/index.html',
        permanent: false,
      },
      {
        source: '/dhrstadyumn.html',
        destination: '/dhrstadyumn/index.html',
        permanent: false,
      },
      {
        source: '/faryadur',
        destination: '/faryadur/index.html',
        permanent: false,
      },
      {
        source: '/faryadur.html',
        destination: '/faryadur/index.html',
        permanent: false,
      },
      {
        source: '/harinder',
        destination: '/harinder/index.html',
        permanent: false,
      },
      {
        source: '/harinder.html',
        destination: '/harinder/index.html',
        permanent: false,
      },
      {
        source: '/itsmesheranya',
        destination: '/itsmesheranya/index.html',
        permanent: false,
      },
      {
        source: '/itsmesheranya.html',
        destination: '/itsmesheranya/index.html',
        permanent: false,
      },
      {
        source: '/pratibha.sharmaaaa',
        destination: '/pratibha.sharmaaaa/index.html',
        permanent: false,
      },
      {
        source: '/pratibha.sharmaaaa.html',
        destination: '/pratibha.sharmaaaa/index.html',
        permanent: false,
      },
      {
        source: '/punya',
        destination: '/punya/index.html',
        permanent: false,
      },
      {
        source: '/punya.html',
        destination: '/punya/index.html',
        permanent: false,
      },
      {
        source: '/sania',
        destination: '/sania/index.html',
        permanent: false,
      },
      {
        source: '/sania.html',
        destination: '/sania/index.html',
        permanent: false,
      },
      {
        source: '/shravya',
        destination: '/shravya/index.html',
        permanent: false,
      },
      {
        source: '/shravya.html',
        destination: '/shravya/index.html',
        permanent: false,
      },
      {
        source: '/sonakshi',
        destination: '/sonakshi/index.html',
        permanent: false,
      },
      {
        source: '/sonakshi.html',
        destination: '/sonakshi/index.html',
        permanent: false,
      },
      {
        source: '/sidebar',
        destination: '/sidebar/index.html',
        permanent: false,
      },
      {
        source: '/sidebar.html',
        destination: '/sidebar/index.html',
        permanent: false,
      },
      {
        source: '/unicornsforclimateaction',
        destination: '/unicornsforclimateaction/index.html',
        permanent: false,
      },
      {
        source: '/unicornsforclimateaction.html',
        destination: '/unicornsforclimateaction/index.html',
        permanent: false,
      },
      {
        source: '/safe-space',
        destination: '/safe-space/index.html',
        permanent: false,
      },
      {
        source: '/safe-space.html',
        destination: '/safe-space/index.html',
        permanent: false,
      },
      {
        source: '/sign-up',
        destination: '/sign-up/index.html',
        permanent: false,
      },
      {
        source: '/sign-up.html',
        destination: '/sign-up/index.html',
        permanent: false,
      },
      {
        source: '/wallpapers',
        destination: '/Wallpapers/index.html',
        permanent: false,
      },
      {
        source: '/wallpapers.html',
        destination: '/Wallpapers/index.html',
        permanent: false,
      },
      {
        source: '/waste-to-art',
        destination: '/waste-to-art/index.html',
        permanent: false,
      },
      {
        source: '/waste-to-art.html',
        destination: '/waste-to-art/index.html',
        permanent: false,
      },
      {
        source: '/Yamuna',
        destination: '/Yamuna/index.html',
        permanent: false,
      },
      {
        source: '/Yamuna.html',
        destination: '/Yamuna/index.html',
        permanent: false,
      },
      {
        source: '/upi',
        destination: '/upi.html',
        permanent: false,
      },
    ];
  },
};
