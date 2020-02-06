		// Selector Options Display Modifier
		function services(){
		//console.log('services');
		//console.log('divID', divID);
		//console.log('this.value', document.getElementById('selectOptions').value);
			var val = document.getElementById('selectOptions').value;

			document.getElementById('residential').style.display = val == 1 ? 'block' : 'none';
			document.getElementById('commercial').style.display = val == 2 ? 'block' : 'none';
			document.getElementById('corporate').style.display = val == 3 ? 'block' : 'none';
			document.getElementById('hybrid').style.display = val == 4 ? 'block' : 'none';
			$('.form-control').val('');
			}		
		
			//RadioButtons

			function Clicked(){
				if(document.querySelector("input[name=type]:checked").value == 0) {
				document.getElementById('typeElevator').value = 7565;
				document.getElementById('rate').value = 10.00;
			} if(document.querySelector("input[name=type]:checked").value == 1){
				document.getElementById('typeElevator').value = 12345;
				document.getElementById('rate').value = 13;
			} if(document.querySelector("input[name=type]:checked").value == 2){
				document.getElementById('typeElevator').value = 15400;
				document.getElementById('rate').value = 16.00;
			}
		};


				//Calcul Var
				var fees = document.getElementById('fees').value;
				var totalNet = document.getElementById('totalNet').value;
				var columnNumber = document.getElementById('colNum').value
				
		

			function res_P() {
				// console.log(document.getElementById('selectOptions').value)
				if (document.getElementById('selectOptions').value == 1){
			
					// Residential variables
				var suitRes = document.getElementById('suitRes').value;
				var floorsRes = document.getElementById('floorsRes').value;


					// Hybrid variables
				var numBuildingHyb = document.getElementById('buildingHyb').value;
				var numFloorsHyb = document.getElementById('floorsHyb').value;
				var numBasementHyb = document.getElementById('basementHyb').value;
				var numParkingHyb = document.getElementById('parkingHyb').value;
				var numPeopleCapHyb = document.getElementById('peopleCapHyb').value; 

				// 
				

				 // console.log('save');
				 	//Residential Function Part
				


					// Cages Ascenseur = (Arondis)(SuitRes/FloorsRes)/6
				document.getElementById('cagesDeployed').value = Math.ceil((suitRes) / floorsRes /6); //Cages d'ascenseur

				//Nombre Colonnes
				document.getElementById('colNum').value = Math.floor(floorsRes/20 +1); 
				var elevatorNum = Math.floor((floorsRes +1)/20)*2;
				// document.getElementById('taxes').value = document.getElementById('typeElevator').value * document.getElementById('output.value');

				//total net
				document.getElementById('totalNet').value = document.getElementById('typeElevator').value * document.getElementById('cagesDeployed').value * document.getElementById('colNum').value;

				// Installation fees
				document.getElementById('fees').value = (document.getElementById('rate').value * document.getElementById('totalNet').value)/ 100;

				//total
				document.getElementById('totalPrice').value = Number(document.getElementById('fees').value) + Number(document.getElementById('totalNet').value);
				
			}
		};

			function commer_P() {
					//console.log('IT WORKS')
					// Commercial variables
				var numBuildingCommer = document.getElementById('buildingCommer').value;
				var numFloorsCommer = document.getElementById('floorsCommer').value;
				var numBasementCommer = document.getElementById('basementCommer').value;
				var numParkingCommer = document.getElementById('parkingCommer').value;
				var numElevatorsCommer = document.getElementById('elevatorsCommer').value;
				/* NumberOfElevatorsNeeded=NumberOfElevatorsCages 
				Number of buildings, Number of floors + Number of basement, Number of parking, Number of elevators
				*/
					//Number of cages deployed
				document.getElementById('cagesDeployed').value = document.getElementById('elevatorsCommer').value; 
				document.getElementById('colNum').value = 1;
				
					//total Net
				document.getElementById('totalNet').value = document.getElementById('elevatorsCommer').value * document.getElementById('typeElevator').value * document.getElementById('colNum').value;

					//Installation fees
				document.getElementById('fees').value = (document.getElementById('rate').value * document.getElementById('totalNet').value)/ 100;

					//total Price
				document.getElementById('totalPrice').value = Number(document.getElementById('fees').value) + Number(document.getElementById('totalNet').value);

			};
			function corp_P(){
					// Corporate variables
					// console.log('hey')
					var numCorporate = document.getElementById('corpNum').value;
					var numFloorsCorp = document.getElementById('floorsCorp').value;
					var numBasementCorp = document.getElementById('basementCorp').value;
					var numParkingCorp = document.getElementById('parkingCorp').value;
					var numPeopleCapCorp = document.getElementById('peopleCapCorp').value;

					// Nombre Colonne Ascenseur requis (Nombre étages+ nombre sous-sol)/20
					var div = (Number(document.getElementById('floorsCorp').value)) + Number(document.getElementById('basementCorp').value) 
					document.getElementById('colNum').value = Math.ceil(div/20);
					
					/*Nombre ascenseur Si le type d’immeuble est Corporatif ou Hybride, on multiplie le  
				nombre d’occupants maximum par étage par le nombre d’étages  
				(incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total. 
				Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000. */
					document.getElementById('cagesDeployed').value = Math.ceil(document.getElementById('peopleCapCorp').value * (Number(document.getElementById('floorsCorp').value) + Number(document.getElementById('basementCorp').value))/(1000));

					 //total Net
					document.getElementById('totalNet').value = document.getElementById('cagesDeployed').value * document.getElementById('typeElevator').value;

					//Installation fees
				document.getElementById('fees').value = (document.getElementById('rate').value * document.getElementById('totalNet').value)/ 100;

				//total Price
				document.getElementById('totalPrice').value = Number(document.getElementById('fees').value) + Number(document.getElementById('totalNet').value);
			}
			
			function hybrid_P(){
			// Nombre Colonne Ascenseur requis 
			//(Nombre étages+ nombre sous-sol)/20
				var div = (Number(document.getElementById('floorsHyb').value)) + Number(document.getElementById('basementHyb').value) 
				document.getElementById('colNum').value = Math.ceil(div/20);
									
					/*Nombre ascenseur Si le type d’immeuble est Corporatif ou Hybride, on multiplie le  
					nombre d’occupants maximum par étage par le nombre d’étages  
					(incluant le nombre de sous-sols) pour obtenir le nombre d’occupants  total. 
					Le nombre d'ascenseurs requis est déterminé par le nombre  d’occupants divisé par 1000.
					cages déployés = (People Cap * #floors + #basement) / 1000 */
				document.getElementById('cagesDeployed').value = Math.ceil(document.getElementById('peopleCapHyb').value * (Number(document.getElementById('floorsHyb').value) + Number(document.getElementById('basementHyb').value))/(1000));
				
					 //total Net
					 // total net = CagesDéployés * TypeElevator
				document.getElementById('totalNet').value = document.getElementById('cagesDeployed').value * document.getElementById('typeElevator').value;
				
					//Installation fees
					// Fees = (rate*total net)/100
				document.getElementById('fees').value = (document.getElementById('rate').value * document.getElementById('totalNet').value)/ 100;
				
					//total Price
					// Total price = fees + total Net
				document.getElementById('totalPrice').value = Number(document.getElementById('fees').value) + Number(document.getElementById('totalNet').value);
			}
							
			
				
		