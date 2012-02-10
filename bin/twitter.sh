#!/usr/bin/env bash

fetch_avatar()
{
  curl -L "https://api.twitter.com/1/users/profile_image?screen_name=$1&size=normal" > "images/twitter/$1.png"
}

fetch_avatar "alex_young"
fetch_avatar "YukaYoung"
fetch_avatar "voidfiles"
fetch_avatar "RicRoberts"
fetch_avatar "jaknowlden"
fetch_avatar "olegpodsechin"
