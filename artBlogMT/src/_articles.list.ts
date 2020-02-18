
  <section class="text-center my-5">

  <!-- Section heading -->
  <h2 class="h1-responsive font-weight-bold my-5">All articles</h2>
  
  

  <!-- Grid row -->
  <div class="row" *ngIf="(articles$|async)">

    <!-- Grid column -->
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4" *ngFor="let article of (articles$|async)">
  
      <!-- Featured image -->
      <div class="view overlay rounded z-depth-2 mb-4 waves-light" mdbWavesEffect>
        <img class="img-fluid" [src]="article.imageUrl" alt="Article Image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      <!-- Category -->
      <a href="#!" class="pink-text">
        <h6 class="font-weight-bold mb-3"><mdb-icon far icon="map" class="pr-2"></mdb-icon>Art</h6>
      </a>
      <!-- Post title -->
  <h4 class="font-weight-bold mb-3"><strong>{{article.title}}</strong></h4>
      <!-- Post data -->
  <p>by <a class="font-weight-bold">{{article.authorName}}</a></p>
      <!-- Excerpt -->
  <p class="dark-grey-text">{{article.content|shorten}}</p>
      <!-- Read more button -->
  <a  mdbBtn color="pink" rounded="true" mdbWavesEffect routerLink="/articles/details/{{article.id}}">Read more</a>

    </div>
    <!-- Grid column -->

   

  </div>
  <!-- Grid row -->

</section> 
