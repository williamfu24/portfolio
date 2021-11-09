# portfolio
Sample website project for own portfolio


https://www.youtube.com/watch?v=bSMZgXzC9AA&ab_channel=devaslife

Tools:
  - React
    * Javascript Library for UI
  - Next.js
    * React framework for hybrid static and server rendering and route prefetching etc.
  - Chakra UI
    * A simple modular and accessible component library for react
  - Framer Motion
    * Animation library for react
  - Three.js
    * 3-D library for Javascript

Project Structure:
$Project Root
|   #Page Files
|- pages
|   #React component Files
|- component
|   #Non-react modules
|- lib
|   #Static files for images and 3d model Files
|_ public

Notes for self:
  run w/: npm run dev

  Things downloaded for this:
    HomeBrew to get GithubCLI
    Install nvm (for nvm install: https://tecadmin.net/install-nvm-macos-with-homebrew/)
      to Install Node.js (install node https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681)
        to install NPM (comes with node.js)

  Install from NPM @chakraui/react @emotion/react @emotion/styled framer-Motion next react react dom

    installed @chakraui/icons for nav bar


  Working in Navigation Bar - some missing elements
    in video compared to mine: (didn't bring anything in)
    -public : dog.glb + /images
    -public/images: /contents, /links, /works, footprint-dark.png, footprint.png, inkdrop-banner.jpg, takya.jpg
    -public/images/contents: blog-500-paid-users.jpg, blog-financial-goal.png, blog-how-to-price-yourself.jpg, youtube-50x-faster.jpg, youtube-fish-workflow.jpg, youtube-my-desk-setup.jpg

      **Replace footprint.png and footprint-dark.png with food/-dark.png

    then we vim components/logo.js

    NavBar notes:
      Have posts in navbar and w/in menu. If page is too small to see header links then manu will appear
