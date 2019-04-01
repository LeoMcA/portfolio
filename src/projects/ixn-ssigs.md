---
description: "Student group and event management platform created for UCL"
header:
  image:
    svg_preview: true
    src: "./assets/ixn-ssigs.png"
languages:
 - "python"
 - "javascript"
 - "html"
frameworks:
 - "django"
 - "bootstrap"
technologies:
 - "metricsgraphics.js"
 - "postgresql"
 - "docker"
 - "vagrant"
 - "google maps api"
category: "university"

license: "mit"
source: "https://github.com/LeoMcA/103P_2018_team51"
---

My main first year project, working for a client within UCL to build an event management platform for student groups.

## Group management system
Through the administration interface, site administrators can create new groups. Then UCL staff and students can log in to join groups, and administrators can assign any number of them to be student leads: which gives them permission to create new events in the group, view group metrics, and allows an administrator the ability to easily contact them all.

## Event management system
Through the event creation interface student leads can create events in their group These events are then listed on the events page, and can be filtered by time or group. Registration for the events can also be open to the public or restricted to UCL student/staff or just members of the group in which the event appears.

## Ticketing system
Once registered, users will receive a QR code ticket to register their attendance at the event. This happens by a student lead (or site administrator) opening the event attendance registration page at the event, which uses a laptop’s webcam or a phone’s camera to scan the attendee’s QR code ticket, and log their attendance to the event.

## UCL API OAuth sign-in
This API provides an OAuth interface for UCL’s Shibboleth SSO system, allowing UCL staff and students to log into our
website with their UCL username and password. This ensures only UCL staff/students can log into the site, and provides us with extra data (such as a user’s full name, UPI and department).

## Metrics interface
There are numerous metrics interfaces, displaying metrics for registration and attendance at events, new members and events across groups, and new users.

## Student leads contact
All student leads, or the student leads of a particular group, can be emailed by clicking on a link visibile to administrators.
