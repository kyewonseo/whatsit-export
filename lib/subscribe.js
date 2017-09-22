'use strict';

var createPod = require('../lib/createPod');
var PODNAME = '';
var AwPubSub = require('whatsit-pubsub')

exports.on = function () {

  let awPubSub = new AwPubSub()
  awPubSub.nrp.on('whatsit/export/pascalvoc', function(data, channel) {
    console.log('connectionName =>' + channel);
    console.log('projectId =>' + data);

    if (channel.includes("pascalvoc")) {
      console.log('pascalvoc ok!')

      //create bigquery pod !
      PODNAME = "pascalvoc";
      createPod.spawnPod(PODNAME, data)

    }
  })
}

