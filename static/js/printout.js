//$(document).ready(function() {
            //$('.print-projected-ongoing-btn').click(function(){       
            function PrintOut(element){       
                 
                
                               
                let css_files = ["http://localhost/specis/css/bootstrap.min.css", 
                                       //"http://localhost:83/naf_dot/css/bootstrap-theme.min.css",
                                      //"http://localhost:83/naf_dot/font/quicksand.woff2",
                                     // "http://localhost:83/naf_dot/css/admin.css", 
                                      "http://localhost/specis/css/font-awesome/4.7.0/css/font-awesome.min.css"                                         
                                      ];
                $(element).printThis({//$("#downloadable-table").printThis({
                    debug: false,               // show the iframe for debugging
                    importStyle: true,         // import style tags
                    printContainer: true,       // grab outer container as well as the contents of the selector
                    loadCSS: css_files, // path to additional css file - use an array [] for multiple 
                    pageTitle: null,//title, //"Projected/Ongoing Courses",             // add title to print page
                    removeInline: false,        // remove all inline styles from print elements
                    //header: `<div align="center" style="margin-bottom:10rem"><b>RESTRICTED</b></div>`,//null,               // prefix to html
                    //header: `<div>Printed from Training Management System on ${new Date()}</div>`,  
                    //footer: `<div align="center" style="margin-bottom:0"><b>RESTRICTED</b></div>`,//null,//`©${new Date().getFullYear()}. Nigerian Air Force. All Rights Reserved.`,               // postfix to html
                    base: true ,               // preserve the BASE tag, or accept a string for the URL
                    formValues: true,           // preserve input/form values
                    doctypeString: "...",       // enter a different doctype for older markup
                    removeScripts: false,       // remove script tags from print content
                    copyTagClasses: true       // copy classes from the html & body tag 
                });  
                                
               
                
             }
               // });
       // });