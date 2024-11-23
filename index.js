const lodingAPI = async (searchText, isShowAll) => {
     const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`);
     const data = await res.json();
     const phones = data.data
     showCardData(phones, isShowAll);
};

const handleSearch = (isShowAll) => {
     const searchInput = document.getElementById('search-input');
     const searchText = searchInput.value;
     // console.log(value)
     lodingAPI(searchText, isShowAll);
}

const showCardData = (phones, isShowAll) => {
     // console.log(data);
     const container = document.getElementById('show-card-container');
     container.textContent = '';


     // show all container 
     const showContainer = document.getElementById('show-all-container');
     if (phones.length > 9 && !isShowAll) {
          showContainer.classList.remove('hidden');
     }
     else {
          showContainer.classList.add('hidden');
     }

     // console.log('is show all', isShowAll)

     if (!isShowAll) {
          phones = phones.slice(0, 9)
     }

     for (let value of phones) {
          // console.log(value)
          const div = document.createElement("div");
          div.innerHTML = `
               <div class="w-4/6 border border-[#CFCFCF]  mx-auto grid justify-items-center text-center gap-4 p-5 rounded-md">
                    <img class="bg-[#eef8ff] p-12" src="${value.image}" alt="">
                    <h3 class="text-2xl font-bold">${value.phone_name}</h3>
                    <p class="text-[18px] text-[#706F6F]">There are many variations of <br> passages of available, but the <br> majority have suffered</p>
                    <p class="text-2xl font-bold">$999</p>
                    <button class="btn btn-primary">Show Derails</button>
               </div>
          `
          container.appendChild(div);
     };

};

const handleshow = () => {
     handleSearch(true);
}

