
<!-- ################################################# Notes on How to Start -->
Initially the "build" folder will not have been created yet.
Therefor the html will not have ref for it.
You can init but using gulp. Type command "gulp watch" in terminal
then navigate your editor to "assets". As you save your
work in both "styles" and "scripts" gulp will auto great
the built version in "Build" folder
--------------------------------------------------------------------------------
the command "gulp icons" will automatically create a "sprite" version of your
SVGs in the "Icon" folder. To link it to your html make sure its added to
the "assets" -> master.css file.
--------------------------------------------------------------------------------
gulp Build: will create a "docs" folder for deployment.
This can be changed to "dist" in the gulp tasks folder in build.js.
--------------------------------------------------------------------------------
You can preview your completed website with "gulp previewDist" command.





<!-- ######################################################### PERSONAL NOTES-->

### For Images follow this format when possible:

<picture>

  <source sizes="404px" data-srcset="assets/images/our-start.jpg 404w,
  assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">


  <img class="lazyload" data-srcset="assets/images/our-start-landscape.jpg 800w,
  assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our Founder: Jane Doe">

</picture>
<!-- ##################################################### PERSONAL NOTES-- END>
