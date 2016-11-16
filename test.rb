# File.open("./test.txt",'r') do |lines|
# 	buffer = lines.read.upcase!
# 	File.open("./test1.txt", "w") do |ls|
# 		ls.write()
# 	end
# end

# require('find')

# File.open("./test.txt","a") do |ls|
# 	Find.find("./") do |path|
# 		ls.puts(File.basename(path));
# 	end
# end

File.open("./test.txt", "a") do |ls|
	Dir.foreach("./") do |name|
		ls.puts(name)
	end
end