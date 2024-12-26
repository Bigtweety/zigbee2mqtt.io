"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80143],{57393:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>s,data:()=>a});var i=o(6254);const n={},s=(0,o(89596).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"schneider-electric-wde002906-meg5001-0300",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#schneider-electric-wde002906-meg5001-0300"},[(0,i.Lk)("span",null,"Schneider Electric WDE002906/MEG5001-0300")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"WDE002906/MEG5001-0300")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Wiser wireless switch 1-gang or 2-gang")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, switch_actions, action, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WDE002906-MEG5001-0300.png",alt:"Schneider Electric WDE002906/MEG5001-0300"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To enter pairing mode, press the upper right button 3 times quickly. The LEDs will flash in orange. After a connection has been made, the LEDs will switch to green.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory Reset</span></a></h3><p>To reset the device, press the upper right button 3 times quickly (in less than 0.5 seconds) and then press and hold this button for at least 10 seconds. When the LEDs start flashing red, release the button. If the reset is successful, the LEDs will flash in green a few times. To change the connection mode from bluetooth to zigbee hold the button for 20 seconds instead of 10 seconds (red LED blinks faster)</p><h3 id="mode-change" tabindex="-1"><a class="header-anchor" href="#mode-change"><span>Mode change</span></a></h3><p>It is possible to change from 1-gang to 2-gang. To achieve this press the top left and bottom right button for 10 seconds (2 LEDs on the left and right start blinking).</p><p>To change to 1-gang a factory reset is needed.</p><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery"><span>Battery</span></a></h3><p>The device uses a single CR2032.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',11)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch-actions-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-right-endpoint"><span>Switch actions (enum, right endpoint)</span></a></h3><p>Set Switch Action for right Button.. Value can be found in the published state on the <code>switch_actions_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_right&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p><h3 id="switch-actions-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-left-endpoint"><span>Switch actions (enum, left endpoint)</span></a></h3><p>Set Switch Action for left Button.. Value can be found in the published state on the <code>switch_actions_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_left&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_right</code>, <code>on_left</code>, <code>off_right</code>, <code>off_left</code>, <code>toggle_right</code>, <code>toggle_left</code>, <code>brightness_move_to_level_right</code>, <code>brightness_move_to_level_left</code>, <code>brightness_move_up_right</code>, <code>brightness_move_up_left</code>, <code>brightness_move_down_right</code>, <code>brightness_move_down_left</code>, <code>brightness_step_up_right</code>, <code>brightness_step_up_left</code>, <code>brightness_step_down_right</code>, <code>brightness_step_down_left</code>, <code>brightness_stop_right</code>, <code>brightness_stop_left</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13))])}]]),a=JSON.parse('{"path":"/devices/WDE002906_MEG5001-0300.html","title":"Schneider Electric WDE002906/MEG5001-0300 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WDE002906/MEG5001-0300 control via MQTT","description":"Integrate your Schneider Electric WDE002906/MEG5001-0300 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"Mode change","slug":"mode-change","link":"#mode-change","children":[]},{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Switch actions (enum, right endpoint)","slug":"switch-actions-enum-right-endpoint","link":"#switch-actions-enum-right-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, left endpoint)","slug":"switch-actions-enum-left-endpoint","link":"#switch-actions-enum-left-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1735216893000},"filePathRelative":"devices/WDE002906_MEG5001-0300.md"}')}}]);