
# PostCSS-Starter-Kit


I put together this compact kit for a quick and rapid start using postcss and
a few of its very useful plugins.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
gulp watch
```

Watch will activate browser-sync and start watching your files in the "app" (or src) folders. As you save your work in both "styles" and "scripts" folders gulp will automatically create
the built version in "Build" folder.

```shell
gulp icons
```

the command "gulp icons" will automatically create a "sprite" version of your
SVGs in the "Icon" folder. To link it to your html make sure its added to
the "assets" -> master.css file.

```shell
gulp build
```

gulp Build: will create a "docs" folder for deployment.
This can be changed to "dist" in the gulp tasks folder in build.js.

```shell
gulp previewDist
```

You can preview your completed website in the "build" folder
with the "gulp previewDist" command.





<!-- ######################################################### PERSONAL NOTES-->

### For Images follow this format when possible:

picture

  source sizes="404px" data-srcset="assets/images/someSmallPicture.jpg 404w,
  assets/images/someSmallPicture-hi-dpi.jpg 808w" media="(min-width: 1020px)"


  img class="lazyload" data-srcset="assets/images/someLandscapPicture.jpg 800w,
  assets/images/someLandscapPicture-landscape-hi-dpi.jpg 1600w" alt="Format-Like-This"

/picture
<!-- ##################################################### PERSONAL NOTES-- END>
