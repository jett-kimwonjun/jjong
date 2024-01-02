<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>PLAY</title>
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1, minimum-scale=1,maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="format-detection" content="telephone=no">
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="full-screen" content="yes" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="360-fullscreen" content="true" />
        <meta name="screen-orientation" content="" />
        <meta name="x5-orientation" content="">
        <meta name="x5-page-mode" content="app">

        <!--favicon-->
        <link rel="shortcut icon" href="res/favicon.ico">
        <link rel="apple-touch-icon-precomposed" href="res/favicon.ico"/>
        <link rel="stylesheet" type="text/css" href="style-mobile.css" />
    </head>

    <body style="margin: 0; background: #ddd;" align="center">
        <div style="align:center;display: none"></div>

        <div id="canvasDiv" style="width:100%;height:100%;">
            <canvas id="GameCanvas" oncontextmenu="event.preventDefault()" tabindex="0"></canvas>

            <video id="contentElement" style="display:none;position: absolute;top:0px;left: 0px;"></video>
            <div id="block-Box" style="display:block;width:100%;height:100%;"></div>
        </div>

        <div id="adContainer" style="display:none;position: absolute;top:0px;left: 0px;width:100%;height:100%;z-index:999;"></div>
        <div id="loadingText" style="width:100%;display: none;text-align:center;position:absolute;top:45%;z-index:2;font-size:20px;color:#CFAC6A">
            귀여운 쫑이게임...0%
        </div>

        <div id="splash">
        </div>

        <div id="loadingImg" style="top:30%;width:110%;position:absolute; ">
            <img src="res/loading.gif" width="50%" height="50%" />
        </div>


        <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
        <script type="text/javascript" src="ads.js"></script>

        <script src="src/settings.js" charset="utf-8"></script>
        
        <script>
            window.adsbygoogle = window.adsbygoogle || [];
            const adBreak = function(o) {
                adsbygoogle.push(o);
            }
        </script>

        <script type="text/javascript">
            var preloader;
            var adCompleteFlag = false;
            var resCompleteFlag = false;

            var adEndComplete = false;
            var resEndComplete = false;

            judgeLanTitle();

            function judgeLanTitle() {
                document.title = "소의X쫑";
            }

            var loadintT = document.getElementById("loadingText");
            var loadintGif = document.getElementById("loadingImg")
            setTimeout(function() {
                loadintGif.remove();
                loadintT.style.display = ""
                updateLabView(0.1);
            }, 1 * 1000)

            window.timer = null;
            window.tempSeconds = 1;
            window.loadData = {};
            loadData.completedCount = 0;
            loadData.totalCount = 0;

            onload();

            function onload() {
                var winHeight = document.documentElement.clientHeight;
                document.getElementById("canvasDiv").style.height = winHeight + "px";
            };
            window.onload = function() {
                document.getElementById("block-Box").style.display = "none";
            }

            function updateLabView(t) {
                if (timer != null) {
                    clearInterval(timer);
                }
                timer = setInterval(function() {
                    tempSeconds++;
                    actualTotal();
                    var loadintT = document.getElementById("loadingText")
                    if (!loadintT) {
                        return;
                    }
                    loadintT.innerHTML = '귀여운 쫑이게임...' + parseInt(tempSeconds) + '%';

                    switch (tempSeconds) {
                        case 20:
                            updateLabView(0.2);
                            break;
                        case 40:
                            updateLabView(0.3);
                            break;
                        case 60:
                            updateLabView(0.4);
                            break;
                        case 96:
                            updateLabView(5);
                            break;
                        case 97:
                            updateLabView(10);
                            break;
                        case 98:
                            updateLabView(50);
                            break;
                        case 99:
                            updateLabView(100);
                            break;
                        default:
                            if (tempSeconds >= 80 && tempSeconds < 96) {
                                updateLabView(t + 0.1);
                            }
                            break;
                    }
                    if (tempSeconds > 100) {
                        clearInterval(timer);
                        tempSeconds = 100
                        loadintT.innerHTML = '귀여운 쫑이게임...' + parseInt(tempSeconds) + '%';
                    }
                }, t * 1000);
            }

            function actualTotal() {
                var percent = parseInt(100 * loadData.completedCount / loadData.totalCount);
                if (percent > tempSeconds && loadData.totalCount > 1) {
                    tempSeconds = percent;
                }
            }
        </script>
        <script src="src/settings.js" charset="utf-8"></script>
        <script src="src/extraSettings.js" charset="utf-8"></script>
        <script src="main.js" charset="utf-8"></script>
        <script type="text/javascript">
            (function() {
                // open web debugger console
                if (typeof VConsole !== 'undefined') {
                    window.vConsole = new VConsole();
                }

                var splash = document.getElementById('splash');
                splash.style.display = 'block';
                console.log("indexlText");
                var cocos2d = document.createElement('script');
                cocos2d.async = true;
                cocos2d.src = window._CCSettings.debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js';

                var engineLoaded = function() {
                    document.body.removeChild(cocos2d);
                    cocos2d.removeEventListener('load', engineLoaded, false);
                    window.boot();
                };
                cocos2d.addEventListener('load', engineLoaded, false);
                document.body.appendChild(cocos2d);
            })();
        </script>
    </body>
</html>
