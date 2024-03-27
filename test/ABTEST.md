### A/B Test Name: Photo Gallery Layout Test

User Story Number: US10

Metric (from the HEART grid): Engagement

Hypothesis: The hypothesis is that changing the layout of trip photo galleries from a grid layout to a timeline layout or vice versa will impact user engagement with the photo galleries. The problem we aim to solve is that users might find it cumbersome to navigate through trip photos in a grid layout, potentially leading to lower engagement and interaction with the app's photo sharing feature. By switching to a timeline layout, users may find it easier to follow the chronological narrative of their trip, potentially increasing engagement and satisfaction with the app.

Experiment:

- Audience: 50% of randomly selected users will be assigned to the control group, where they will continue to see trip photo galleries in the current timeline layout. The other 50% will be assigned to the experimental group, where they will see trip photo galleries presented in the new grid layout.
- Firebase Analytics Tracking: Set up event tracking to measure the following metrics:
  - Number of photo gallery views
  - Average time spent in photo galleries
  - Number of photos viewed per session
  - Time spent in the galleries screen
  - Time spent between opening consecutive photo gallerie
- Success Metrics: The success of the experiment will be determined based on an increase in the above-mentioned metrics in the experimental group compared to the control group.

Variations:

- Control Group: Trip photo galleries displayed in the existing timeline layout.-
- Experimental Group: Trip photo galleries displayed in a new grid layout with larger thumbnails and a responsive design to accommodate different screen sizes. (Provide mockups and design examples showcasing the new grid layout)


### A/B Test Name: Fog of War Grid Size Test

User Story Number: US4

Metric (from the HEART grid): Engagement

Hypothesis: The hypothesis is that changing the grid size of the fog of war feature from the current setup to a grid size of approximately 1/4 mile x 1/4 mile will impact user engagement positively. The problem we aim to solve is that users may find it difficult to explore and navigate within the fog of war area with the current grid setup, potentially leading to frustration and decreased engagement with the location tracking feature. By implementing a finer grid size, users may experience more precise visibility adjustments as they move between saved locations, potentially increasing engagement and satisfaction with the app's location tracking functionality.

Experiment:

- Audience: 50% of randomly selected users will be assigned to the control group, where they will continue to experience the current fog of war grid setup. The other 50% will be assigned to the experimental group, where they will experience the new fog of war grid setup with a grid size of approximately 1/4 mile x 1/4 mile.
- Firebase Analytics Tracking: Set up event tracking to measure the following metrics:
  - Number of times users interact with the fog of war feature
  - Average time spent exploring within the fog of war area
  - Number of saved locations visited per session
  - Time spent on the map screen
  - Time spent between opening consecutive fog of war areas
- Success Metrics: The success of the experiment will be determined based on an increase in the above-mentioned metrics in the experimental group compared to the control group.
Variations:

- Control Group: Users experience the fog of war feature with the current grid setup.
- Experimental Group: Users experience the fog of war feature with a new grid setup with a grid size of approximately 1/4 mile x 1/4 mile. (Provide visual examples showcasing the new fog of war grid setup)

### A/B Test Name: Tracking Coords Test

User Story Number: US5

Metric (From HEART grid): Retention

Hypothesis: We hypothesize that by implementing tracking coordinates for user interactions, we will enhance user engagement and ultimately improve retention rates. Currently, without tracking coordinates, we lack detailed insights into user interactions, making it challenging to optimize the user experience effectively. By incorporating tracking coordinates, we anticipate gaining deeper understanding and consequently improving our ability to tailor the platform to user preferences, thus increasing retention.

Experiment:
- Test will run for two weeks to gauge how often people use it. 
- We will divide the audience into two groups, one experimental and one control
  - Control group will use the the previous feature of just tracking coords with no change.
  - Experimental will recieve a build that gives exact coordinates and where they have been with markers
- Firebase Analytics:
  - Time spent on the map screen
  - The number of markers placed per mile
- Success Metrics: the success is determined on if the time spent on the map is higher than that of the build without the additional features of markers.


### A/B Test Name: Email Confirmation Requirement Test
  
User Story Number: US2

Metric (from the HEART grid): Retention

Hypothesis:
The hypothesis is that altering the email confirmation requirement for new users will impact user retention. Currently, new users must confirm their email before gaining access to the app. The problem we aim to solve is potential friction in the onboarding process, as some users might abandon the app before confirming their email. By allowing users to access the app for one day without email confirmation, we anticipate reducing friction in the onboarding process, potentially increasing user retention.

Experiment:
- Audience: 50% of randomly selected new users will be assigned to the control group, where they must confirm their email before gaining access to the app. The other 50% will be assigned to the experimental group, where they can use the app for one day without confirming their email.

Firebase Analytics Tracking:
-Time between user registration and email confirmation (for control group)
-Time spent in the app during the first day (for experimental group)
-Number of interactions within the app during the first day (for experimental group)
-Number of users who confirm their email within the first day (for experimental group)

Success Metrics:
The success of the experiment will be determined based on an increase in user retention metrics in the experimental group compared to the control group.

Variations:
-Control Group: Users must confirm their email before gaining access to the app.
-Experimental Group: Users can access the app for one day without confirming their email.
