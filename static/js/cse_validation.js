$(document).ready(function(){
			$('#centreform_validation').formValidation({
					message: 'This value is not valid',
					icon: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					},
		//<!--cse_title, cse_start_date, cse_end_date, cse_country, cse_type, cse_status, cse_institution, cse_qualification-->
					fields: {
						cse_title: {
							validators: {
								notEmpty: {
									message: 'Course title is required'
								},
								stringLength: {
									min: 1,
									max: 100,
									message: 'Course title no more than 100 characters'
								},
								regexp: {
									//regexp:/^[a-zA-Z0-9\-_\s]+$/,
									//similar to: (though, \w supports other Unicode characters)
									regexp: /^[\w\-()\/\s]+$/,//regexp: /^[\w\-()\s]+$/,// /^[\w\-\s]+$/,
									message: 'Course title can only contain letters, numbers, hyphens, forward slashes and underscore'
								},
							},
						},
                                                cse_start_date: {
							validators: {
								/*notEmpty: {
									message: 'Course start date is required'
								},*/
                                                                stringLength: {
									min: 10,
									max: 10,
									message: 'Start date format (dd/mm/yy)'
								},
							},
						},
                                                cse_end_date: {
							validators: {
								/*notEmpty: {
									message: 'Course end date is required'
								},*/	
                                                                stringLength: {
									min: 10,
									max: 10,
									message: 'End date format (dd/mm/yy)'
								},
							},
						},
                                                cse_location: {
							validators: {
								notEmpty: {
									message: 'Location name is required'
								},
								stringLength: {
									min: 1,
									max: 200,
									message: 'Location name no more than 100 characters'
								},
								regexp: {
									//regexp:/^[a-zA-Z0-9\-_\s]+$/,  
									//similar to: (though, \w supports other Unicode characters)
									regexp: /^[\w\-\,\.\/\s]+$/, // /^[\w\-\s]+$/,
									message: 'Location can only contain letters, numbers, commas and a dot'
								},
							},
						},
                                                cse_trg_category: {
							validators: {
								stringLength: {
									min: 1,
									max: 100,
									message: 'Trg name no more than 100 characters'
								},
								regexp: {
									//regexp:/^[a-zA-Z0-9\-_\s]+$/,
									//similar to: (though, \w supports other Unicode characters)
									regexp: /^[\w\-\s]+$/,
									message: 'Trg name can only contain letters, numbers, hyphens, and underscore'
								},
							},
						},
                                                 
                        cse_releasing_authority: {
							validators: {
								notEmpty: {
									message: 'Releasing authority is required'
								},
								stringLength: {
									min: 1,
									max: 200,
									message: 'Releasing authority no more than 200 characters'
								},
								regexp: {
									//regexp:/^[a-zA-Z0-9\-_\s]+$/,
									//similar to: (though, \w supports other Unicode characters)
									regexp:  /^[\w\-\/\s]+$/, //   /^[\w\-\s]+$/,
									message: 'Releasing authority can only contain letters, numbers and forward slashes'
								},
							},
						},  
                        /*cse_specialty_id: {
							validators: {
								notEmpty: {
									message: 'Course specialty is required'
								},
							},
						},*/
                                                cse_trg_type: {
							validators: {
								notEmpty: {
									message: 'Trg type is required'
								},
							},
						},
                                               
					}
			});
		});