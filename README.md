# Project Overview

## Project Name

CrimeSpotter
## Project Description

I will be listing the number of specified crimes that occur in different states in the US, based on user input that includes what crime they want to track, and which states they want to see. It allows the user to see trends in each crime over time, from 1993 to 2018
## API and Data Sample

FBI Crime Data API

Here is a link to the API: 
https://crime-data-explorer.fr.cloud.gov/api


Sample JSON:
```json
{
  "results": [
    {
      "state_id": 18,
      "state_abbr": "IL",
      "year": 2010,
      "population": 12841980,
      "violent_crime": 57132,
      "homicide": 704,
      "rape_legacy": 3066,
      "rape_revised": null,
      "robbery": 20386,
      "aggravated_assault": 32976,
      "property_crime": 349064,
      "burglary": 77472,
      "larceny": 242681,
      "motor_vehicle_theft": 28911,
      "arson": 2123
    },
    {
      "state_id": 18,
      "state_abbr": "IL",
      "year": 2011,
      "population": 12859752,
      "violent_crime": 54523,
      "homicide": 781,
      "rape_legacy": 3030,
      "rape_revised": null,
      "robbery": 20217,
      "aggravated_assault": 30495,
      "property_crime": 344468,
      "burglary": 77719,
      "larceny": 237362,
      "motor_vehicle_theft": 29387,
      "arson": 3096
    }
  ],
  "pagination": {
    "count": 2,
    "page": 0,
    "pages": 1,
    "per_page": 0
  }
}
```

## Wireframes

Here is my basic wireframe design  https://res.cloudinary.com/dzl2lwcyw/image/upload/v1597845341/Screen_Shot_2020-08-19_at_8.45.29_AM_mwfqzv.png

The plan is for my app to have 2 pull down menus to specify the crime type and the state, which appear on the left. The x-axis is time, from 1993 to 2018. The y-axis is the incidence


### MVP/PostMVP

The functionality will the be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 


- baseline HTML 
- retrieve crime data using API
- plotting data from API
- CSS: all styling  including flexbox, responsive design
- Javascript: rendering data for the DOM


#### PostMVP  

- implement chart JS to show crime data

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes


https://res.cloudinary.com/dzl2lwcyw/image/upload/v1597699217/Screen_Shot_2020-08-17_at_4.16.41_PM_jysiao.png
Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component         | Priority. | Estimated Time | Time Invested | Actual Time |
| ----------------- | :--------:|  :-----------: | :-----------: | :----------:|
| base HTML page    | H         | 4hrs           |               |             |
|CSS FlexBox        | H         | 4hrs           |               |             |
|CSS responsv Dsgn  | H         | 3hrs           |               |             |
|CSS general Styling| H         | 5hrs           |               |             |
| DOM Rendering JS  | H         | 6hrs           |               |             |
| Graphing API Data | H         | 4hrs           |               |             |
| Debugging CSS     | H         | 4hrs           |               |             |
| Debugging JS      | H         | 3hrs           |               |             |
| Total             | H         | 33 hrs         |               |             |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
