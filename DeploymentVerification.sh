#!/bin/bash 
#############################################################
# Module:      DeploymentVerification.sh                    #
# Author:      Application Technology & Tools               #
# Date:        January 2011                                 #
# Description: Create LastDeployed.html for an application   #
#############################################################

htmlLocation="LastPublished.html"

echo "DeploymentVerification.sh starting"
echo "$htmlLocation created"
echo "Please execute this html $htmlLocation to verify deployment!"

echo "<html>" > $htmlLocation
echo "<head>" >> $htmlLocation
echo "<style type=text/css>" >> $htmlLocation
echo ".f2 {font-size:11px;font-family:Verdana,Arial,Geneva;text-decoration:none;}" >> $htmlLocation
echo "</style>" >> $htmlLocation
echo "</head>" >> $htmlLocation
echo "<body>" >> $htmlLocation
echo "<span class=f2>Metrics Last Published at $(date)</span>" >> $htmlLocation
echo "</body>" >> $htmlLocation
echo "</html>">> $htmlLocation

echo "DeploymentVerification.sh finished"

