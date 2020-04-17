new Vue({
  el: '#exercise',
  data: {
    effectClass:{
      highlight:true,
      shrink:false
    },
    float: 'float',
    classModel:'',
    isVisible:false,
    mystyle:{
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'      
    },
    progressStyle:{
      backgroundColor:'red',
      width:'0px'
    },
  },
  methods: {
    startEffect: function() {
      var vm = this;

      setInterval(()=>{
        vm.effectClass.highlight=!vm.effectClass.highlight;
        vm.effectClass.shrink=!vm.effectClass.shrink;
      },1000);
    },
    startProgress: function(){
      var vm =this;
      var width = 0;
      setInterval(()=>{
        width+=50;
        vm.progressStyle.width=width+'px';
      },500);
    }
  }
});
