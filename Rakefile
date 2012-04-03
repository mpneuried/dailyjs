require 'ftools'

namespace :remote do
  task :validate do
    puts 'Validating _site/'

    # These files may be lost in a completely new _site
    unless File.exists? '_site/.htaccess'
      puts "[WARN] Copying .htaccess file"
      File.copy '.htaccess', '_site/.htaccess'
    end

    # The jekyll I first started using got this wrong
    unless File.exists? '_site/atom.xml'
      if File.exists? 'atom.xml'
        File.copy 'atom.xml', '_site/atom.xml'
      elsif File.exists? 'atom.html'
        puts "[WARN] An atom.html file has been generated instead of .xml"
        File.mv 'atom.html', 'atom.xml'
        File.copy 'atom.xml', '_site/atom.xml'
      end

    end

    File.copy '_site/atom.xml', '_site/feed.xml'
    `bin/feed_images.sh`
    puts 'Done.'
  end

  task :deploy do
    puts "Deploying..."
    Rake::Task['tags:generate'].invoke
    Rake::Task['remote:validate'].invoke
    puts `rsync -avz "_site/" dailyjs.com:/var/www/dailyjs.com/`
  end
end

desc "Deploy"
task :deploy do
  Rake::Task['remote:deploy'].invoke
end

desc "Update twitter icons"
task :update_twitter_icons do
  `bin/twitter.sh`
end


task :default => [:e]
desc "Local workflow"
task :e do
  Rake::Task['tags:generate'].invoke
  `jekyll --server`
end

namespace :tags do
  desc "Generate tags"
  task :generate do
    puts 'Generating tags...'
    require 'rubygems'
    require 'jekyll'
    include Jekyll::Filters

    options = Jekyll.configuration({})
    site = Jekyll::Site.new(options)
    site.read_posts('')

    html =<<-HTML
---
layout: default
title: Tags
---

<ul class="breadcrumb">
  <li class="home"><a href="/">Home</a></li>
  <li>Tags</li>
</ul>

<h2>Tags</h2>

    HTML

    site.categories.sort.each do |category, posts|
      html << <<-HTML
      <h3 id="#{category}">#{category}</h3>
      HTML

      html << '<ul class="posts">'
      posts.each do |post|
        post_data = post.to_liquid
        html << <<-HTML
          <li>
            <div>#{date_to_string post.date}</div>
            <a href="#{post.url}">#{post_data['title']}</a>
          </li>
        HTML
      end
      html << '</ul>'
    end

    File.open('tags.html', 'w+') do |file|
      file.puts html
    end

    puts 'Done.'
  end
end

namespace :feed do
  desc 'Correct feed image URLs'
  task :images do
    `bin/feed_images.sh`
  end
end
