package {
	import flash.media.*;
	import flash.net.*;
	import flash.display.*;
	import flash.events.*;
	
	import com.everydayflash.equalizer.*;
	import com.everydayflash.equalizer.color.*;
	
	public class Main extends Sprite{
		public var currentStatus:String = 'stop';
		public var currentVariable:String = root.loaderInfo.parameters.playingPodcast;
		public var songUrl:URLRequest = new URLRequest(root.loaderInfo.parameters.podcast);
		public function Main() {
			var s:Sound = new Sound(this.songUrl);
			var es:EqualizerSettings = new EqualizerSettings();
			es.numOfBars = 50;
			es.height = 150;
			es.barSize = 2;
			es.vgrid = true;
			es.hgrid = 4;
			es.colorManager = new GradientBarColor();
			es.effect = EqualizerSettings.FX_NONE;
			
			var e:Equalizer = new Equalizer();
			e.update(es);
			e.x = 10;
			e.y = 10;
			addChild(e);
			
			addEventListener(Event.ENTER_FRAME, e.render);
			addEventListener(Event.ENTER_FRAME, this.playPause(s));
		}
		
		public function playPause(sound:Sound){
			this.currentVariable = root.loaderInfo.parameters.playingPodcast;
			if(this.currentStatus != this.currentVariable){
				if(this.currentVariable == 'playing'){
					sound.play(0, 100, new SoundTransform(1, 0));
				}else{
					sound.close();
				}
				this.currentStatus = this.currentVariable;
			}
		}
	}
}