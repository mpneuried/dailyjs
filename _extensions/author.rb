module GitAuthorHelper
  # Example in a template:
  #   By {{ page.url | author }}
  def author(url)
    file_name = File.join '_posts', "*#{url.split('/').last}*"
    post_file = Dir[file_name].first
    `git log --pretty=format:"%an" #{post_file}`
  rescue
    puts "Error inserting author: #{$!}"
  end
end

Liquid::Template.register_filter(GitAuthorHelper)
