<template>
      <footer>

        <div class="container" >
          <div class="row" >
            <div class="col-xs-5 col-sm-4 col-md-2" ><label >Company</label>
              <ul class="footer__links" >
                <li ><a href="/about" >About</a></li>
                <li ><a href="/careers" >Careers</a> <a href="/careers" class="no-underline"
                    ><span class="label label-primary ml-4" >We're Hiring</span></a></li>
                <li ><a href="https://blog.algorithmia.com" target="_blank" >Blog</a></li>

              </ul>
            </div>
            <div class="col-xs-5 col-sm-4 col-md-2" ><label >Developers</label>
              <ul class="footer__links" >
                <li ><a href="/getting-started" >
                    Getting Started
                  </a></li>
                <li ><a href="/pricing" onclick="safeGA('send', 'event', 'pricing', 'footer');"
                    >Pricing</a></li>
                <li ><a href="/developer" >
                    Docs
                  </a></li>
              </ul>
            </div>
            <div class="col-xs-5 col-sm-4 col-md-2" ><label >Products</label>
              <ul class="footer__links" >
                <li ><a href="/algorithms" class="router-link-exact-active active" >
                    AI Marketplace
                  </a></li>
                <li ><a href="/serverless-ai-layer" >Serverless AI Layer</a></li>
                <li ><a href="/enterprise" >Algorithmia Enterprise</a></li>
              </ul>
            </div>
          </div>
          <div class="row" >
            <div class="col-md-12 footer__footer" >
              <div ><img src="/static/images/algo-black.7fb895d.svg" alt="Algorithmia" class="logo-150"
                  >
                <p class="caption footer__tac" ><span class="mr-8" ><i aria-hidden="true"
                      class="fa fa-copyright" ></i> 2018 — Algorithmia, Inc.</span> <span ><a
                      href="/privacy" >Privacy Policy</a><span class="mh-4" > | </span><a
                      href="/terms" >Terms &amp; Conditions</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>


</style>