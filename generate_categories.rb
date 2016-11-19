# encoding: UTF-8

=begin

windows 平台在CMD下使用以下命令运行脚本（否则因编码问题报错）:

	ruby -E UTF-8 generate_categories.rb

=end

# File.open("./test.txt",'r') do |lines|
# 	buffer = lines.read.upcase!
# 	File.open("./test1.txt", "w") do |ls|
# 		ls.write()
# 	end
# end

# 生成博文分类目录 json 文件
require('find')
require('json')
require('date')

temp = {}

Find.find("./categories/") do |path|
	if File.directory?(path)
		d_name = File.split(path)[1].capitalize
		temp.store(d_name, []) if !(temp.keys + ['Categories']).include?(d_name)
		next
	else
		file_time = ''
		file_title = ''
		file_path = path.sub(/\.|(\.\.)/, '')
		cate_name = path.split(/\//)[-2].capitalize
		if temp.has_key?(cate_name)
			File.open(path) do |io|
				buffer = io.read
				file_time = buffer.scan(/span.+id=\"time\".+(\d{4}-\d{1,2}-\d{1,2})/).join
				file_title = buffer.scan(/h1.*>(.+)</).join
			end
			# 处理空数据
			file_time = file_time == '' ? Date.today.to_s : Date.parse(file_time).to_s
			file_title = File.basename(path, ".*") if file_title == ''
			# 将数据存在一个 js 对象中
			temp[cate_name].push({:time=>file_time, :title=>file_title, :path=>file_path}) 
		end
	end
end

# 删除空文件夹，根据时间降序排列
temp.keys.each do |key|
	if temp[key].size > 0
		temp[key].sort! { |a,b| b[:time] <=> a[:time] }
	else
		temp.delete(key)
	end
end

File.open("./source/json/categories.json","w") do |io|
	# 将数据保存成 json 格式
	io.write(temp.to_json)
end

# File.open("./test.txt", "a") do |io|
# 	Dir.foreach("./") do |name|
# 		io.puts(name)
# 	end
# end