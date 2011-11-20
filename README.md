# xls

Convert xls into JSON

# npm

	npm install xls

# usage 

	require('xls').parse('file.xls', function(err, data) {
		// xls file parsed into data
	});

# requirements

xlhtml on linux

	sudo apt-get install xlhtml

xhtml[http://chicago.sourceforge.net/xlhtml/] on OSX

	tar xzvf xlhtml-0.5.tgz
	cd xlhtml-0.5
	configure
	make
	make install

If that does not work try

	tar xzvf xlhtml-0.5.tgz 
	cd xlhtml-0.5
	aclocal; autoconf; automake --add-missing
	make
	make install