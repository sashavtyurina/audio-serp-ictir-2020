This dataset accompanies the following paper:

## A Mixed-Method Analysis of Text and Audio Search Interfaceswith Varying Task Complexity

Alxandra Vtyurina, Charles L.A. Clarke, Edith Law, Johanne R. Trippas, Horatiu Bota

ICTIR 2020

## Structure of the folder:

- AudioClips
- TextSnippetsForAudio
- Images
- SearchTasks

## AudioClips.
Audio clips that were played to the study participants. Each subdirectory corresponds to a task and contains 5 audio files that were presented to participants in Study 1 (AMT) and Study 2 (LAB).

## TextSnippetsForAudio

This folder contains search snippets selected for each task using which audio results were generated. Each file corresponds to a search task.
Each file has the folowing structure:
- taskID -- id assigned to the task in [2].
- snippets -- search snippets collected by issuing the topic of the task to Google search engine.
  - trueRank -- the rank of the result as displayed on Google search results page (SERP)
  - title -- the title of the search result as displayed on the SERP.
  - tlDomain -- the shortened URL of the website.
  - summary -- displayed summary of the result.
File ``IN14.009_Phonograph_GOLDEN.txt'' contains only two search results, because this task was used as a quality check task in Study 1 (AMT).


## SearchTasks
Contains a single file tasks.json, which lists all tasks used in this project and their corresponding backstories.

- id -- id assigned to the task in [1];
- code -- TREC code of the task;
- complexity -- complexity level of the task according to taxonomy defined in [2].
A - Analyze, U - Understand, R - Remember.
- search_query -- topic of the task as retrieved from TREC task collections. This search query was issued to collect search results for this task.
- backstory -- a detailed backstory as defined by [2], explaining the supposed information need of the participant.
- goldenHIT -- if True, this task was used as a quality check in the crowdsourced experiment (Study 2).
- training -- if True, this task was used as a training task in the controlled experiment (Study 2).


## References:
[1] Peter Bailey, Alistair Moffat, Falk Scholer, and Paul Thomas.
User variability and IR system evaluation.
SIGIR 2015.

[2] L.W. Anderson, D. R. Krathwohl, and B. S. Bloom.
A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom’s Taxonomy of Educational Objectives.
