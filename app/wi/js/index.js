/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    arExperienceUrl: "www/test.html",
    // The features your augmented reality experience requires, only define the ones you really need
    requiredFeatures: [ "2d_tracking", "geo" ],
    // Represents the device capability of launching augmented reality experiences with specific features
    isDeviceSupported: false,
    // Additional startup settings, for now the only setting available is camera_position (back|front)
    startupConfiguration:
    {
        "camera_position": "back"
    },
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
  
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady() {
   
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        app.wikitudePlugin.isDeviceSupported(app.onDeviceSupported, app.onDeviceNotSupported, app.requiredFeatures);

        console.log(app.wikitudePlugin)
    
    },
    onDeviceSupported() {
        

        app.wikitudePlugin.loadARchitectWorld(
            app.onARExperienceLoadedSuccessful,
            app.onARExperienceLoadError,
            app.arExperienceUrl,
            app.requiredFeatures,
            app.startupConfiguration
        );

  
    },

    onARExperienceLoadedSuccessful(loadedURL) {
        /* Respond to successful augmented reality experience loading if you need to */
    },
    // Callback if your AR experience did not load successful
    onARExperienceLoadError(errorMessage) {
        alert('Loading AR web view failed: ' + errorMessage);
    },
    onDeviceNotSupported(errorMessage) {
        console.log(errorMessage)
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    },
    

    
};

app.initialize();