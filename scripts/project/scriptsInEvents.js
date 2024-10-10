"use strict";


	function SubmitLeaderboardScore(newScore)
	{
		
	}

	function InitExternEval() 
    {
		console.log('InitExternEval');
	
		if (window.firstInit == undefined)
		{
			window.firstInit = 1;
		}
		else
		{
			ExternEval();
		}
    }
	
	function TakeReward()
	{
		console.log('TakeReward');
	
		window.adReward = 0;
	}
	
	function RewardErrorHandled()
	{
		console.log('RewardErrorHandled');
	
		window.rewardError = 0;
	}
	
	function InitApi(_appId) 
    {
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		console.log('InitApi');
		
		window.callTime = secondsSinceEpoch - 181;
    }
    
    function ExternEval() 
    {
        console.log("ExternEval");
		
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		if (window.callTime != undefined && 
			secondsSinceEpoch - window.callTime > 180)
		{
			console.log('ExternEval 2');
			
			window.callTime = secondsSinceEpoch;
			
			if (typeof preroll !== 'undefined')
			{
				if (window[preroll.config.loaderObjectName] != undefined)
				{
					window.adRunning = 1;
				
					try {
						window[preroll.config.loaderObjectName].refetchAd(ExternEvalResumeGame);
					}
					catch(err) {
						console.log(err.message);
						ExternEvalResumeGame();
					}
				}
			}
		}
    }
	
	function ExternEvalResumeGame()
	{
		console.log("ExternEvalResumeGame");
	
		window.adRunning = 0;
		
	}
	
	function PreloadRewarded() 
    {
        console.log("PreloadRewarded");
	
		if (window.rewardedCallbacks == undefined)
		{
			window.rewardedCallbacks = true;
			
			try {
				window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
					onReady:RewardedReady, 
					onSuccess:RewardedSuccess, 
					onFail:RewardedFail
				});
			}
			catch(err) {
				console.log(err.message);
			}
		}
    }
	
	function ShowRewarded() 
	{
		console.log("ShowRewarded");
	
		if (typeof preroll !== 'undefined')
		{
			if (window[preroll.config.loaderObjectName] != undefined)
			{
				window.canReward = 0;
				window.adRunning = 1;
			
				try {
					window[preroll.config.loaderObjectName].showRewardAd();
				}
				catch(err) {
					console.log(err.message);
					window.adRunning = 0;
				}
			}
		}
	
	}
	
	function RewardedReady()
	{
		console.log("RewardedReady");
		
		if (window.rewardedCount == undefined)
		{
			window.rewardedCount = 1;
			window.canReward = 1;
		}
		else{
			window.rewardedCount = window.rewardedCount + 1;
			setTimeout(function(){ window.canReward = 1; }, 30000);
		}
		
	}
	
	function RewardedSuccess()
	{
		console.log("RewardedSuccess");
	
		window.adRunning = 0;
		window.adReward = 1;
	}
	
	function RewardedFail()
	{
		console.log("RewardedFail");
	
		window.adRunning = 0;
	}
	
	function OpenLink()
	{
		
	}
	
		window.adRunning = 0;
		window.adRunningRewarded = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 4;
		window.myLeaderboardScore = 0;
		window.gameLang = "en";
		
		InitApi(0);
	
		
	

{
	const scriptsInEvents = {

		async EventSheet1_Event2_Act11(runtime, localVars)
		{
			InitExternEval();
		},

		async EventSheet1_Event8_Act7(runtime, localVars)
		{
			ExternEval();
		},

		async EventSheet1_Event10_Act2(runtime, localVars)
		{
			runtime.globalVars.name1_int_value = runtime.globalVars.name1_int_value + (runtime.globalVars.currentChar).charCodeAt(0);
		},

		async EventSheet1_Event11_Act2(runtime, localVars)
		{
			runtime.globalVars.name2_int_value = runtime.globalVars.name2_int_value + (runtime.globalVars.currentChar).charCodeAt(0);
		},

		async Ads_Event1_Act1(runtime, localVars)
		{
			runtime.globalVars.adActive = window.adRunning;
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
