# Hack OHI/O 2017
Front-end application for image recognition project.
Challenge: create a mobile app that service technicians can
leverage to obtain the information they need faster by scanning the nameplate and interpreting the
results. This solution should leverage the phone’s camera to complete this scanning. The fields with
which these technicians may want to retrieve on the spot are the following:
* Brand
* Catalog Number or Style Number
* Order Number (GO# or PO#)

# Compile
1) clone this github repo:`https://github.com/ChristopherBlackwell/hackathon.git`
2) cd `hackathon`
3) Modify `index.html` `config` variable for your Firebase Account

# Run
 Open `index.html`

 # Challenges
 The Authentication token needed to be refreshed each hour. Being limited by time, we found more value in manually resetting the `auth token` each hour rather than developing a more scalable and industrial solution.
