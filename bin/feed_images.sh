#!/usr/bin/env bash

cat _site/feed.xml | sed "s/src='\/images\/posts/src='http:\/\/dailyjs.com\/images\/posts/g" > _site/feed_1.xml
cat _site/feed_1.xml | sed 's/src="\/images\/posts/src="http:\/\/dailyjs.com\/images\/posts/g' > _site/feed.xml
rm _site/feed_1.xml

cat _site/atom.xml | sed "s/src='\/images\/posts/src='http:\/\/dailyjs.com\/images\/posts/g" > _site/atom_1.xml
cat _site/atom_1.xml | sed 's/src="\/images\/posts/src="http:\/\/dailyjs.com\/images\/posts/g' > _site/atom.xml
rm _site/atom_1.xml
