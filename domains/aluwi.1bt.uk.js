// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Portfolio for aluwi', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'aluwi', // desired subdomain name
  owner: {
    email: 'aluwi.yora@gmail.com',
  },
  record: {
    CNAME: 'dns1.p03.nsone.net',
    CNAME: 'dns2.p03.nsone.net',
    CNAME: 'dns3.p03.nsone.net',
    CNAME: 'dns4.p03.nsone.net',
    
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
