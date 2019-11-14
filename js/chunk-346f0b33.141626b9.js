(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-346f0b33"],{"2e44":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[n("b-card",[n("b-row",[n("b-col",{attrs:{sm:"2",lg:"4"}},[e._v("\n                      Select Chapter: "),n("b-form-select",{attrs:{options:e.questionBank.Chapters,"value-field":"Number","text-field":"Number"},on:{change:function(t){return e.generate()}},model:{value:e.selectedChapter,callback:function(t){e.selectedChapter=t},expression:"selectedChapter"}})],1),n("b-col",{attrs:{sm:"4",lg:"8"}},[n("b-button-group",[n("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.generate()}}},[e._v("Randomize")]),n("b-button",{attrs:{variant:"warning"},on:{click:function(t){return e.gradeIt()}}},[e._v("Show Results")]),n("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.clear()}}},[e._v("Clear Answers")])],1)],1)],1)],1)],1)],1),e.showResults?n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[n("b-card",[n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[n("h1",[n("b-badge",{attrs:{variant:e.passingScore?"success":"danger"}},[e._v(e._s(e.correctQuestionsCount)+" / "+e._s(e.currentQuiz.length))])],1)])],1)],1)],1)],1):e._e(),n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._l(e.currentQuiz,function(t,r){return n("b-form-group",{key:r,attrs:{"label-for":"question_"+r}},[n("b-card",{attrs:{"border-variant":e.showResults&&null!=t.UserAnswerLetter&&""!=t.UserAnswerLetter?t.UserAnswerLetter==t.CorrectAnswerLetter?"success":"danger":"dark"}},[n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._v("\n                          "+e._s(r+1)+". "+e._s(t.Text)+"\n                      ")])],1),n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[n("b-radio-group",{attrs:{stacked:"",name:"question_"+r,options:t.Answers,"value-field":"Letter","text-field":"FormattedText"},model:{value:t.UserAnswerLetter,callback:function(n){e.$set(t,"UserAnswerLetter",n)},expression:"question.UserAnswerLetter"}})],1)],1),e.showResults&&t.UserAnswerLetter!=t.CorrectAnswerLetter&&t.UserAnswerLetter&&""!=t.UserAnswerLetter?n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._v("\n                          Answer: "+e._s(t.CorrectAnswerLetter)+"\n                      ")])],1):e._e(),e.showResults?n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._v("\n                          Chapter: "+e._s(t.ChapterNumber)+"\n                      ")])],1):e._e(),e.showResults?n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._v("\n                          Objective: "+e._s(t.Objective)+"\n                      ")])],1):e._e(),e.showResults?n("b-row",[n("b-col",{attrs:{sm:"6",lg:"12"}},[e._v("\n                          Reference Page: "+e._s(t.Reference)+"\n                      ")])],1):e._e()],1)],1)}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.scrollToTop()}}},[e._v("Back to the Top")])],2)],1),0!=e.loadingCounter?n("BlockUI",{attrs:{message:e.loadingMessage}},[n("i",{staticClass:"fa fa-cog fa-spin fa-3x fa-fw"})]):e._e()],1)},s=[],o=n("e254"),a={name:"quiz",components:{Question:o["a"]},props:{},computed:{correctQuestionsCount:function(){return this._.filter(this.currentQuiz,function(e){return e.UserAnswerLetter==e.CorrectAnswerLetter}).length},passingScore:function(){return this.correctQuestionsCount>.8*this.currentQuiz.length}},data:function(){return{showResults:!1,currentQuiz:[],selectedChapter:1,loadingCounter:0,loadingMessage:"",questionBank:{IsDefault:!0,Chapters:[{Number:1,Questions:[{Number:1,ChapterNumber:1,Text:"?",Answers:[{Letter:"a",Text:""}],CorrectAnswerLetter:"a",UserAnswerLetter:"",Objective:"",Reference:""}]}]}}},methods:{scrollToTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},generate:function(){if(this.selectedChapter>0){this.showResults=!1;var e=this.selectedChapter;this.loadingMessage="Creating Random Quiz...",this.loadingCounter++,this.currentQuiz=[];for(var t=this._.find(this.questionBank.Chapters,{Number:e}),n=20,r=0;r<n;r++){var s=this.findRandomUnusedQuestion(this.currentQuiz,t.Questions);if(s){for(var o=0;o<s.Answers.length;o++)s.Answers[o].FormattedText=s.Answers[o].Letter+". "+s.Answers[o].Text;this.currentQuiz.push(s)}}this.loadingCounter--}},findRandomUnusedQuestion:function(e,t){var n=this._.without(t,e),r=this._,s=(n=this._.filter(t,function(t){return-1==r.indexOf(e,t)&&null==t.UserAnswerLetter}),Math.floor(Math.random()*n.length));return n[s]},fetch:function(){var e=this;this.loadingMessage="Downloading Questions...",this.loadingCounter++,this.$axios.get("question-bank.json").then(function(t){e.questionBank=t.data,e.loadingCounter--,console.info("loaded questions ok"),e.generate()}).catch(function(t){console.error(t),e.loadingCounter--})},gradeIt:function(){this.showResults=!0},clear:function(){for(var e=this.selectedChapter,t=this._.find(this.questionBank.Chapters,{Number:e}),n=0;n<t.Questions.length;n++)t.Questions[n].UserAnswerLetter=null;this.generate()}},beforeMount:function(){},activated:function(){},mounted:function(){this.questionBank.IsDefault&&this.fetch()}},i=a,u=(n("ab04"),n("2877")),c=Object(u["a"])(i,r,s,!1,null,null,null);t["default"]=c.exports},"4b71":function(e,t,n){"use strict";var r=n("c33b"),s=n.n(r);s.a},ab04:function(e,t,n){"use strict";var r=n("b40c"),s=n.n(r);s.a},b40c:function(e,t,n){},c33b:function(e,t,n){},e254:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[e._v("\n    Question\n")])},s=[],o={name:"question"},a=o,i=(n("4b71"),n("2877")),u=Object(i["a"])(a,r,s,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-346f0b33.141626b9.js.map