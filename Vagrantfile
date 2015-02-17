# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT

sudo apt-get update

sudo apt-get -y install python-software-properties python g++ make

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

sudo add-apt-repository -y ppa:git-core/ppa
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update

# vim
sudo apt-get -y install vim

# update git
sudo apt-get -y install git

# node
sudo apt-get -y install nodejs

# npm modules
sudo npm install -g npm # update npm

SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    config.vm.box = "hashicorp/precise64"

    config.vm.provision "shell", inline: $script

    config.vm.network "private_network", ip: "192.168.50.100"
    config.vm.hostname = "servus.js"

    config.vm.synced_folder ".", "/home/vagrant/project", type: "rsync", rsync__exclude: [".git/", ".vagrant/", "node_modules/"]

    config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'" # avoids 'stdin: is not a tty' error.
    config.ssh.forward_agent = true

    config.vm.provider "virtualbox" do |v|
        v.memory = 1024
        v.cpus = 8
    end
end
