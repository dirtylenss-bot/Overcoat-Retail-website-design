const header = `<header class="site-header"><div class="header-main header-shell"><div class="header-left"><a class="brand" href="homepage.html" aria-label="Overcoats homepage"><img src="assets/images/overcoat-logo.png" alt="Overcoats"></a><nav class="primary-nav" aria-label="Shopping navigation"><a href="homepage.html">Homepage</a><a href="index.html">All</a><a href="catalogue.html?group=mens">Mens</a><a href="catalogue.html?group=womens">Woman</a><a href="catalogue.html?group=kids">Kids</a><a href="trends.html">News &amp; Trends</a></nav></div><div class="header-right"><label class="search search-bar"><span>⌕</span><input id="site-search" type="search" aria-label="Search coats" placeholder="Search coats"></label><nav class="utility-nav" aria-label="Information navigation"><a href="about.html">About</a><a href="locator.html">Store Locator</a><a href="enquiry.html">Enquiry</a><a href="contact.html">Contact</a></nav><div class="icons"><a href="checkout.html" aria-label="Cart"><img class="cart-icon" src="assets/images/cart.png" alt=""><b class="cart-badge">0</b></a></div></div></div></header>`;
const footer = `<footer class="site-footer"><a class="button" href="contact.html">Contact us</a><div><h3>Customer support</h3><a href="enquiry.html">Product enquiries</a><a href="contact.html">Returns & payments</a><a href="locator.html">Store locations</a></div><div><h3>Corporate info</h3><a href="about.html">About us</a><a href="catalogue.html">Our collection</a><a href="enquiry.html">Newsletter</a></div><div><h3>Follow us</h3><a href="https://wa.me/27118454769" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a></div></footer>`;
document.querySelector('#shared-header')?.replaceWith(document.createRange().createContextualFragment(header));
document.querySelector('#shared-footer')?.replaceWith(document.createRange().createContextualFragment(footer));
const products=[
['women','Camden Wool Coat','Warm wool blend, tailored fit','assets/images/womens-coats/edg0506244072.webp',1299],['men','Harrison Peacoat','Structured warmth for cooler days','assets/images/mens-coats/26smew02_4003_1.webp',1499],['kids','Mia Mini Puffer','Play-ready warmth with a soft lining','assets/images/kids-coats/21_56100330003_6.webp',699],['women','Harper Belted Coat','Soft-touch finish, everyday elegance','assets/images/womens-coats/bug_262300_27060_90_model-f_2221.webp',1599],['men','Lennox Wool Overcoat','Smart outer layer in a wool blend','assets/images/mens-coats/318a3fca-b183-4e7b-9f51-1c396f725cb8.png',1899],['kids','Noah Storm Jacket','Cosy, lightweight and easy to move in','assets/images/kids-coats/21_56100340001_6.webp',749],['women','Sienna Check Overcoat','Classic pattern with a cosy lining','assets/images/womens-coats/3933brown06leadd_700x.webp',1699],['men','Mason Quilted Jacket','Weather-ready comfort and style','assets/images/mens-coats/8c350630deb50b6fc290096a6db2304aaa758920.avif',1399],['kids','Elsie Quilted Coat','Built for little winter adventures','assets/images/kids-coats/21_56700100009_6.webp',799],['women','Luna Puffer Jacket','Lightweight warmth for every day','assets/images/womens-coats/art06-604_f_305.webp',1199],['men','Ryder Field Coat','A reliable coat for cool weather','assets/images/mens-coats/artboard11_11348eb5-e9ba-4e42-a787-76578390ac35_1024x.webp',1599],['kids','Leo Winter Parka','A warm layer for outdoor play','assets/images/kids-coats/38091992_fpx.jpeg',899]
].map(([group,name,description,image,price],id)=>({id,group,name,description,image,price}));
const inventoryProducts=[{"group":"women","image":"assets/images/womens-coats/01170_ke05eks000_if.jpg","name":"01170 KE05EKS000 IF"},{"group":"women","image":"assets/images/womens-coats/16102272_darkgrey_1281983_003.jpg","name":"16102272 DarkGrey 1281983 003"},{"group":"women","image":"assets/images/womens-coats/221106817-800-1067.png","name":"221106817 800 1067"},{"group":"women","image":"assets/images/womens-coats/3933brown06leadd_700x.webp","name":"3933BROWN06LEADD 700x"},{"group":"women","image":"assets/images/womens-coats/3dda0dec7b7041728a4c5ca884abfd27.jpg.webp","name":"3dda0dec7b7041728a4c5ca884abfd27.Jpg"},{"group":"women","image":"assets/images/womens-coats/436481.jpg","name":"436481"},{"group":"women","image":"assets/images/womens-coats/64-9023-vanla-02-800x1000h.jpg.webp","name":"64 9023 VANLA 02 800x1000h.Jpg"},{"group":"women","image":"assets/images/womens-coats/art06-604_f_305.webp","name":"ART06 604 F 305"},{"group":"women","image":"assets/images/womens-coats/edg0506244072.webp","name":"EDG0506244072"},{"group":"women","image":"assets/images/womens-coats/lca0425ta51_01front.webp","name":"LCA0425TA51 01front"},{"group":"women","image":"assets/images/womens-coats/sp04744.0803_2_600x.jpg.webp","name":"SP04744.0803 2 600x.Jpg"},{"group":"women","image":"assets/images/womens-coats/vbswn-ju4501_425_02_90ccd691-6b80-4564-b919-3c1be8e7b9ec.jpg.webp","name":"VBSWN JU4501 425 02 90ccd691 6b80 4564 B919 3c1be8e7b9ec.Jpg"},{"group":"women","image":"assets/images/womens-coats/a7c6cb5a-c950-4111-8cb0-a597c69b49f0.png","name":"A7c6cb5a C950 4111 8cb0 A597c69b49f0"},{"group":"women","image":"assets/images/womens-coats/bkk29209_pale-pink_xl.webp","name":"Bkk29209 Pale Pink Xl"},{"group":"women","image":"assets/images/womens-coats/boss-open-miscellaneous-969-chaqueta-jaleto9-10279818-01.jpeg","name":"Boss OPEN MISCELLANEOUS 969 Chaqueta Jaleto9 10279818 01"},{"group":"women","image":"assets/images/womens-coats/bug_262300_27060_90_model-f_2221.webp","name":"Bug 262300 27060 90 Model F 2221"},{"group":"women","image":"assets/images/womens-coats/c0e7b906ef9ac065cce01d33009e737485e40802_xxl-1.avif","name":"C0e7b906ef9ac065cce01d33009e737485e40802 Xxl 1"},{"group":"women","image":"assets/images/womens-coats/f2b2e8b669e979437146e3fcfec1b740.jpg.webp","name":"F2b2e8b669e979437146e3fcfec1b740.Jpg"},{"group":"women","image":"assets/images/womens-coats/oj1917-137p_check_1.webp","name":"Oj1917 137p Check 1"},{"group":"women","image":"assets/images/womens-coats/umtlzpwhsbgjxindigc7vk.jpg","name":"UmtLZPWhSBGjXiNDigC7VK"},{"group":"men","image":"assets/images/mens-coats/16102129_darkgrey_1282290_008.jpg","name":"16102129 DarkGrey 1282290 008"},{"group":"men","image":"assets/images/mens-coats/193080026-800-1067.webp","name":"193080026 800 1067"},{"group":"men","image":"assets/images/mens-coats/26smew02_4003_1.webp","name":"26SMEW02 4003 1"},{"group":"men","image":"assets/images/mens-coats/318a3fca-b183-4e7b-9f51-1c396f725cb8.png","name":"318a3fca B183 4e7b 9f51 1c396f725cb8"},{"group":"men","image":"assets/images/mens-coats/8c350630deb50b6fc290096a6db2304aaa758920.avif","name":"8c350630deb50b6fc290096a6db2304aaa758920"},{"group":"men","image":"assets/images/mens-coats/artboard11_11348eb5-e9ba-4e42-a787-76578390ac35_1024x.webp","name":"Artboard11 11348eb5 E9ba 4e42 A787 76578390ac35 1024x"},{"group":"men","image":"assets/images/mens-coats/bp1825_midnight_ft_lge.jpg.webp","name":"BP1825 MIDNIGHT FT LGE.Jpg"},{"group":"men","image":"assets/images/mens-coats/gc00503_davtec_77541-10_82805_em_2048x.jpg.webp","name":"GC00503 DAVTEC 77541 10 82805 EM 2048x.Jpg"},{"group":"men","image":"assets/images/mens-coats/i04a9965.webp","name":"I04A9965"},{"group":"men","image":"assets/images/mens-coats/k0r3390407020_801_1.jpg","name":"K0R3390407020 801 1"},{"group":"men","image":"assets/images/mens-coats/m-jkt-145-melatlnav-01_edited.jpg","name":"M JKT 145 MELATLNAV 01 EDITED"},{"group":"men","image":"assets/images/mens-coats/men_s_black_melton_coat_2000x.webp","name":"Men S Black Melton Coat 2000x"},{"group":"men","image":"assets/images/mens-coats/percival_menswear_8_2e380db4-bb34-4cdc-9e90-9cb9038725c3.jpg","name":"PERCIVAL MENSWEAR 8 2e380db4 Bb34 4cdc 9e90 9cb9038725c3"},{"group":"men","image":"assets/images/mens-coats/rs05180.0103_5_1200x.jpg.webp","name":"RS05180.0103 5 1200x.Jpg"},{"group":"men","image":"assets/images/mens-coats/s285081_sirgiio_navy_1.webp","name":"S285081 SIRGIIO NAVY 1"},{"group":"men","image":"assets/images/mens-coats/tillman-navy-static-plaid_1_rm-524a-965e-8989.webp","name":"TILLMAN NAVY STATIC PLAID 1 RM 524A 965E 8989"},{"group":"men","image":"assets/images/mens-coats/ba216749-15e8-406f-b04a-e75b6a9c9e51.png","name":"Ba216749 15e8 406f B04a E75b6a9c9e51"},{"group":"men","image":"assets/images/mens-coats/cmm24278_black_xl.webp","name":"Cmm24278 Black Xl"},{"group":"men","image":"assets/images/mens-coats/images-2026-09-25t184410.583.jpeg","name":"Images   2026 09 25T184410.583"},{"group":"men","image":"assets/images/mens-coats/original.jpg","name":"Original"},{"group":"kids","image":"assets/images/kids-coats/01_104847256_si_00.webp","name":"01 104847256 SI 00"},{"group":"kids","image":"assets/images/kids-coats/1c1fbde182f201180764df95478311c290c59a74_4901094_d01_gallery_0080_p.jpg","name":"1c1fbde182f201180764df95478311c290c59a74 4901094 D01 Gallery 0080 P"},{"group":"kids","image":"assets/images/kids-coats/21_56100330003_6.webp","name":"21 56100330003 6"},{"group":"kids","image":"assets/images/kids-coats/21_56100340001_6.webp","name":"21 56100340001 6"},{"group":"kids","image":"assets/images/kids-coats/21_56700100009_6.webp","name":"21 56700100009 6"},{"group":"kids","image":"assets/images/kids-coats/263-693-30-0406-11s_jpg.jpg.webp","name":"263 693 30 0406 11s JPG.Jpg"},{"group":"kids","image":"assets/images/kids-coats/3-in-1-detachable-parka-for-girls.jpg","name":"3 In 1 Detachable Parka For Girls"},{"group":"kids","image":"assets/images/kids-coats/30449_m-62608516529-659-01.webp","name":"30449 M 62608516529 659 01"},{"group":"kids","image":"assets/images/kids-coats/37025171-56-001.webp","name":"37025171 56 001"},{"group":"kids","image":"assets/images/kids-coats/38091992_fpx.jpeg","name":"38091992 Fpx"},{"group":"kids","image":"assets/images/kids-coats/4573019_n220_mf_1.jpg","name":"4573019 N220 MF 1"},{"group":"kids","image":"assets/images/kids-coats/5100034b-6980_zoom_8.jpg.webp","name":"5100034B 6980 Zoom 8.Jpg"},{"group":"kids","image":"assets/images/kids-coats/51luw2ayxvl._ac_uy1000_.jpg","name":"51luW2AyXVL. AC UY1000 "},{"group":"kids","image":"assets/images/kids-coats/fan8321_a01g_medium.jpg.webp","name":"FAN8321 A01G MEDIUM.Jpg"},{"group":"kids","image":"assets/images/kids-coats/fullsizerender_07b0c08f-f567-44f9-bcdf-647c904f15f7.webp","name":"FullSizeRender 07b0c08f F567 44f9 Bcdf 647c904f15f7"},{"group":"kids","image":"assets/images/kids-coats/wny9k_sq1_0000000070_dark_grey_mdf.webp","name":"WNY9K SQ1 0000000070 DARK GREY MDf"},{"group":"kids","image":"assets/images/kids-coats/y16814s3.jpg","name":"Y16814s3"},{"group":"kids","image":"assets/images/kids-coats/a0962_893_boys_epiq_down_jacke_a.webp","name":"A0962 893 Boys Epiq Down Jacke A"},{"group":"kids","image":"assets/images/kids-coats/original-2-.jpg","name":"Original (2)"},{"group":"kids","image":"assets/images/kids-coats/original-2.jpg","name":"Original 2"},{"group":"kids","image":"assets/images/kids-coats/original.jpg","name":"Original"},{"group":"kids","image":"assets/images/kids-coats/s7-ai323969861001_alternate10.avif","name":"S7 AI323969861001 Alternate10"},{"group":"kids","image":"assets/images/kids-coats/teddy-fleece-jacket_raspberry_main.webp","name":"Teddy Fleece Jacket Raspberry Main"}].map((item,index)=>({id:products.length+index,group:item.group,name:item.name,description:'Selected pre-loved outerwear in excellent condition',image:item.image,price:899+(index%9)*150}));products.push(...inventoryProducts.filter(item=>!products.some(product=>product.image===item.image)));
const money=new Intl.NumberFormat('en-ZA',{style:'currency',currency:'ZAR',maximumFractionDigits:0});let cart=safeArray('overcoats-cart');
function saveCart(){localStorage.setItem('overcoats-cart',JSON.stringify(cart));document.querySelectorAll('.cart-badge').forEach(e=>e.textContent=cart.length)}
function card(p){return `<article class="product-card" data-name="${p.name.toLowerCase()} ${p.description.toLowerCase()} ${p.group}"><button class="gallery-trigger" type="button" aria-label="View larger ${p.name}"><img src="${encodeURI(p.image)}" alt="${p.name}" loading="lazy"></button><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><small>${p.description}</small><span class="cost">${money.format(p.price)}</span><button class="button add" type="button" data-add="${p.id}">Add to cart</button></article>`}
function render(selector,list){const el=document.querySelector(selector);if(el)el.innerHTML=list.map(card).join('')}
const params=new URLSearchParams(location.search),selected={mens:'men',womens:'women',kids:'kids'}[params.get('group')];render('.home-products',products.slice(0,4));render('.catalogue-products',selected?products.filter(p=>p.group===selected):products);if(selected&&document.querySelector('#catalogue-title'))document.querySelector('#catalogue-title').textContent=`${selected[0].toUpperCase()+selected.slice(1)}’s coats`;
const sorter=document.querySelector("#sort-products");sorter?.addEventListener("change",()=>{const sorted=[...products].filter(p=>!selected||p.group===selected);const mode=sorter.value;sorted.sort((a,b)=>mode==="low"?a.price-b.price:mode==="high"?b.price-a.price:mode==="name"?a.name.localeCompare(b.name):a.id-b.id);render(".catalogue-products",sorted)});
function productMatchesSearch(product, query){const q=query.trim().toLowerCase();if(!q)return true;return [product.name,product.description,product.group,product.garment,product.size,product.colour,product.fabric].filter(Boolean).join(' ').toLowerCase().includes(q)}
function filter(q){const out=products.filter(p=>(!selected||p.group===selected)&&productMatchesSearch(p,q));render('.catalogue-products',out);const status=document.querySelector('#search-status');if(status)status.textContent=`${out.length} product${out.length===1?'':'s'} found`}
const search=document.querySelector('#site-search');
const searchablePages=[
  {title:'Homepage',description:'Welcome to Overcoats and our timeless pre-loved outerwear story.',href:'homepage.html',kind:'Page'},
  {title:'All coats',description:'Browse every available women’s, men’s and kids’ coat.',href:'index.html',kind:'Collection'},
  {title:'Women’s coats',description:'Shop curated pre-loved coats for women.',href:'catalogue.html?group=womens',kind:'Collection'},
  {title:'Men’s coats',description:'Shop quality pre-loved coats for men.',href:'catalogue.html?group=mens',kind:'Collection'},
  {title:'Kids’ coats',description:'Shop warm, practical coats for children.',href:'catalogue.html?group=kids',kind:'Collection'},
  {title:'News & Trends',description:'Second-hand fashion news, coat styling and sustainable wardrobe stories.',href:'trends.html',kind:'Article hub'},
  {title:'About Overcoats',description:'Learn about our imported coats, stores and wholesale bales.',href:'about.html',kind:'Page'},
  {title:'Store locator',description:'Find our Benoni, Kempton Park and Springs stores.',href:'locator.html',kind:'Service'},
  {title:'Product and wholesale enquiries',description:'Ask about coats, wholesale bales, delivery and membership.',href:'enquiry.html',kind:'Service'},
  {title:'Contact customer service',description:'Get in touch about orders, delivery and store support.',href:'contact.html',kind:'Service'},
  {title:'The Art of Second-Hand Luxury',description:'Build an elevated wardrobe with character and conscience.',href:'article-luxury.html',kind:'Article'},
  {title:'Why Are We Still Hesitant?',description:'The modern case for choosing pre-loved fashion.',href:'article-bias.html',kind:'Article'},
  {title:'How Recycled Clothing Is Cleaned',description:'Care, hygiene and confidence behind pre-loved clothing.',href:'article-hygiene.html',kind:'Article'},
  {title:'Benefits of Buying Second-Hand Coats',description:'Style, value and a lighter footprint.',href:'article-benefits.html',kind:'Article'}
];
function findSiteResults(query){const q=query.trim().toLowerCase();if(!q)return[];const productMatches=products.filter(p=>productMatchesSearch(p,q)).slice(0,5).map(p=>({title:p.name,description:p.description,href:'product.html?id='+p.id,kind:'Product'}));const pageMatches=searchablePages.filter(p=>(p.title+' '+p.description+' '+p.kind).toLowerCase().includes(q)).slice(0,6);return [...productMatches,...pageMatches].slice(0,8)}
function showSearchResults(query){const label=search?.closest('.search');if(!label)return;let results=label.querySelector('.site-search-results');if(!results){results=document.createElement('div');results.className='site-search-results';results.setAttribute('role','listbox');label.append(results)}const matches=findSiteResults(query);if(!query.trim()){results.hidden=true;results.innerHTML='';return}results.innerHTML=matches.length?matches.map(match=>'<a role="option" href="'+match.href+'"><small>'+match.kind+'</small><strong>'+match.title+'</strong><span>'+match.description+'</span></a>').join(''):'<p>No matching products, pages or services found.</p>';results.hidden=false}
if(search){search.value=params.get('q')||'';search.setAttribute('autocomplete','off');search.setAttribute('aria-expanded','false');search.addEventListener('input',e=>{const q=e.target.value;if(document.querySelector('.catalogue-products'))filter(q);else showSearchResults(q);search.setAttribute('aria-expanded',String(Boolean(q.trim())))});search.addEventListener('keydown',e=>{if(e.key==='Enter'&&search.value.trim()){e.preventDefault();const matches=findSiteResults(search.value);location.href=matches[0]?.href||'catalogue.html?q='+encodeURIComponent(search.value)}});document.addEventListener('click',e=>{if(!e.target.closest('.search')){const results=document.querySelector('.site-search-results');if(results)results.hidden=true}});if(search.value)filter(search.value)}
function lightbox(src,alt){let d=document.querySelector('#lightbox');if(!d){d=document.createElement('dialog');d.id='lightbox';d.className='lightbox';d.innerHTML='<button class="lightbox-close" aria-label="Close">×</button><img>';document.body.append(d);d.addEventListener('click',e=>{if(e.target===d||e.target.closest('.lightbox-close'))d.close()})}d.querySelector('img').src=src;d.querySelector('img').alt=alt;d.showModal()}
document.addEventListener('click',e=>{const add=e.target.closest('[data-add]');if(add){cart.push(+add.dataset.add);saveCart();add.textContent='Added ✓';setTimeout(()=>add.textContent='Add to cart',1200)}const g=e.target.closest('.gallery-trigger');if(g){const i=g.querySelector('img');lightbox(i.src,i.alt)}});document.querySelectorAll('.about-card img,.product-image').forEach(i=>{i.classList.add('zoomable');i.tabIndex=0;i.onclick=()=>lightbox(i.src,i.alt);i.onkeydown=e=>{if(e.key==='Enter')lightbox(i.src,i.alt)}});saveCart();
document.querySelectorAll('.accordion-button').forEach(b=>b.onclick=()=>{const p=document.getElementById(b.getAttribute('aria-controls')),open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!open);p.hidden=open});
document.querySelectorAll('[role="tab"]').forEach(t=>t.onclick=()=>[...t.parentElement.querySelectorAll('[role="tab"]')].forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);document.getElementById(x.getAttribute('aria-controls')).hidden=!on}));
function error(f,msg){f.setAttribute('aria-invalid',!!msg);f.parentElement.querySelector('.field-error').textContent=msg}function valid(form){let ok=true;form.querySelectorAll('[required]').forEach(f=>{let m=!f.value.trim()?'This field is required.':f.type==='email'&&!f.validity.valid?'Enter a valid email address.':f.type==='tel'&&!/^[0-9+()\s-]{7,}$/.test(f.value)?'Enter a valid phone number.':'';error(f,m);if(m)ok=false});return ok}
document.querySelectorAll('.js-form').forEach(form=>{form.oninput=e=>{if(e.target.matches('input,textarea,select'))error(e.target,'')};form.onsubmit=e=>{e.preventDefault();const status=form.querySelector('.form-status');if(!valid(form)){status.textContent='Please correct the highlighted fields.';status.className='form-status error';return}const data=Object.fromEntries(new FormData(form));if(data.website)return;if(form.dataset.email){location.href="mailto:sales@overcoats.co.za?subject=Website%20message&body="+encodeURIComponent(JSON.stringify(data))}form.reset();status.textContent='Thank you — your request has been prepared for customer service.';status.className='form-status success'}});
const stores=[['Overcoats Brentwood Park','31 Van Wyk Road, Brentwood Park, Benoni',-26.151,28.307],['Coat Corner Kempton Park','79 Pretoria Road, Kempton Park',-26.100,28.234],['Coat Corner Springs','29 5th Avenue, Springs',-26.251,28.442]];const mapEl=document.querySelector('#store-map');if(mapEl){const show=q=>document.querySelector('.stores').innerHTML=stores.filter(s=>s.join(' ').toLowerCase().includes(q.toLowerCase())).map(s=>`<article class="store"><h2>${s[0]}</h2><p><strong>Address</strong><br><small>${s[1]}</small></p><a class="button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s[1])}">Get directions</a></article>`).join('')||'<p>No stores match that search.</p>';show('');document.querySelector('#store-search').oninput=e=>show(e.target.value);if(window.L){const m=L.map('store-map').setView([-26.18,28.32],10);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(m);stores.forEach(s=>L.marker([s[2],s[3]]).addTo(m).bindPopup(`<strong>${s[0]}</strong><br>${s[1]}`))}}

// Product-detail and checkout enhancements
const requestedProduct = Number.parseInt(params.get('id'), 10);
const currentProduct = products.find(p => p.id === requestedProduct) || products[0];
const detailImage = document.querySelector('.product-image');
if (detailImage) {
  const detailName = document.querySelector('.product-layout h2');
  const detailPrice = document.querySelector('.product-layout .price');
  const detailDescription = document.querySelector('.product-detail article p');
  const crumb = document.querySelector('.crumb');
  detailImage.src = encodeURI(currentProduct.image);
  detailImage.alt = currentProduct.name;
  detailName.textContent = currentProduct.name;
  detailPrice.textContent = money.format(currentProduct.price);
  detailDescription.textContent = currentProduct.description;
  crumb.textContent = 'Homepage / ' + currentProduct.group + ' / ' + currentProduct.name;
  document.title = currentProduct.name + ' | Overcoats';
  let quantity = 1;
  const quantityBox = document.querySelector('.quantity');
  quantityBox?.addEventListener('click', event => {
    if (!event.target.matches('button,[data-quantity]')) return;
    quantity = Math.max(1, quantity + (event.target.textContent.includes('+') ? 1 : -1));
    quantityBox.querySelector('span').textContent = quantity;
  });
  document.querySelector('.cart')?.addEventListener('click', event => {
    event.preventDefault();
    cart.push(...Array(quantity).fill(currentProduct.id));
    saveCart();
    event.currentTarget.textContent = 'Added to cart';
    setTimeout(() => { event.currentTarget.textContent = 'Add to cart'; }, 1300);
  });
  document.querySelectorAll('.sizes button').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.sizes button').forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
  }));
}
function renderCheckout() {
  const list = document.querySelector('.checkout .summary-item');
  if (!list) return;
  const items = cart.map(id => products.find(product => product.id === id)).filter(Boolean);
  const grouped = items.reduce((all, product) => {
    all[product.id] = all[product.id] || { product, quantity: 0 };
    all[product.id].quantity += 1;
    return all;
  }, {});
  const rows = Object.values(grouped);
  list.innerHTML = rows.length ? rows.map(item =>
    '<div class="summary-row"><b>' + item.product.name + '</b><small>Quantity: ' + item.quantity + '<br>Price: ' + money.format(item.product.price * item.quantity) + '</small></div>'
  ).join('') : '<p>Your cart is empty. <a href="catalogue.html">Browse coats</a></p>';
  document.querySelector('.cart-count').textContent = items.length + ' item' + (items.length === 1 ? '' : 's') + ' in cart';
  document.querySelector('.total span').textContent = money.format(items.reduce((total, product) => total + product.price, 0));
}
renderCheckout();
const checkoutForm = document.querySelector('.checkout form');
checkoutForm?.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('.checkout-status') || document.createElement('p');
  status.className = 'checkout-status error';
  status.textContent = 'Online payment is disabled until a PCI-compliant payment provider is connected. No card information is collected or stored.';
  checkoutForm.querySelector('.pay')?.before(status);
});
document.querySelectorAll('.js-form[data-email]').forEach(form => {
  form.onsubmit = async event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!valid(form)) {
      status.textContent = 'Please correct the highlighted fields.';
      status.className = 'form-status error';
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return;
    status.textContent = 'Sending your message...';
    status.className = 'form-status';
    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@overcoats.co.za', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: 'Overcoats website: ' + (data.messageType || 'Customer message'), _template: 'table' })
      });
      if (!response.ok) throw new Error('Delivery service unavailable');
      form.reset();
      status.textContent = 'Thank you - your message has been sent to customer service.';
      status.className = 'form-status success';
    } catch {
      const subject = encodeURIComponent('Overcoats website: ' + (data.messageType || 'Customer message'));
      location.href = 'mailto:sales@overcoats.co.za?subject=' + subject + '&body=' + encodeURIComponent(JSON.stringify(data, null, 2));
      status.textContent = 'Your email app is opening so you can send the message.';
      status.className = 'form-status success';
    }
  };
});

document.querySelectorAll('.enquiry-card .js-form').forEach(form => {
  form.onsubmit = event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!valid(form)) {
      status.textContent = 'Please correct the highlighted fields.';
      status.className = 'form-status error';
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return;
    const replies = {
      'Individual coat': 'We will check the selected coat and matching sizes, then contact you with availability.',
      'Wholesale bales': 'Our wholesale team will send current bale availability, collection times and delivery options.',
      'Delivery': 'We will confirm delivery coverage, fees and estimated arrival for your area.',
      'Store assistance': 'We will help you choose the most convenient branch and prepare advice for your visit.',
      'Newsletter membership': 'You are subscribed to deal updates. Watch for our welcome email.',
      'Volunteer': 'Thank you for offering to volunteer. Our community team will review your application.',
      'Sponsorship': 'Thank you for your sponsorship request. We will review the details and respond by email.'
    };
    status.textContent = replies[data.interest || data.application] || 'Thank you. Our customer service team will respond using your contact details.';
    status.className = 'form-status success';
    form.reset();
  };
});

// Gallery slideshow, favourites, catalogue pagination, footer logos and resilient map fallback
(function () {
  const slideshowImages = [
    'assets/images/slideshow-coats/screenshot-2026-11-06-at-14.16.29.png',
    'assets/images/slideshow-coats/screenshot-2026-11-06-at-14.17.55.png',
    'assets/images/slideshow-coats/screenshot-2026-11-06-at-14.18.36.png',
    'assets/images/slideshow-coats/screenshot-2026-11-06-at-14.19.23.png',
    'assets/images/slideshow-coats/screenshot-2026-11-06-at-14.20.08.png'
  ];
  const heroContent = document.querySelector('.hero > div');
  if (heroContent) {
    const show = document.createElement('div');
    show.className = 'collection-slideshow';
    show.setAttribute('aria-label', 'Featured outerwear collection');
    slideshowImages.forEach((source, index) => {
      const image = document.createElement('img');
      image.src = source;
      image.alt = 'Overcoats collection look ' + (index + 1);
      image.className = index === 0 ? 'slide active' : 'slide';
      image.loading = index === 0 ? 'eager' : 'lazy';
      show.append(image);
    });
    heroContent.parentElement.insertBefore(show, heroContent);
    let active = 0;
    setInterval(() => {
      const slides = show.querySelectorAll('.slide');
      slides[active].classList.remove('active');
      active = (active + 1) % slides.length;
      slides[active].classList.add('active');
    }, 4200);
  }

  const favourites = () => safeArray('overcoats-favourites');
  const updateFavouriteCount = () => document.querySelectorAll('.favourite-count').forEach(el => el.textContent = favourites().length);
  const addFavouriteButtons = root => {
    root.querySelectorAll('.product-card').forEach(card => {
      if (card.querySelector('.favourite')) return;
      const name = card.querySelector('h3 a');
      const id = Number(new URL(name.href).searchParams.get('id'));
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'favourite';
      button.dataset.favourite = id;
      button.setAttribute('aria-label', 'Add ' + name.textContent + ' to favourites');
      button.setAttribute('aria-pressed', favourites().includes(id));
      const icon = document.createElement('img');
      icon.src = 'assets/images/pngbrighterheart.png';
      icon.alt = '';
      button.append(icon);
      card.append(button);
    });
  };
  const headerIcons = document.querySelector('.icons');
  if (headerIcons && !headerIcons.querySelector('.header-favourite')) {
    const heart = document.createElement('button');
    heart.className = 'header-favourite';
    heart.type = 'button';
    heart.setAttribute('aria-label', 'Favourite products');
    heart.innerHTML = '<img src="assets/images/pngbrighterheart.png" alt=""><b class="favourite-count">0</b>';
    headerIcons.prepend(heart);
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-favourite]');
    if (!button) return;
    const id = Number(button.dataset.favourite);
    const list = favourites();
    const position = list.indexOf(id);
    if (position >= 0) list.splice(position, 1); else list.push(id);
    localStorage.setItem('overcoats-favourites', JSON.stringify(list));
    document.querySelectorAll('[data-favourite="' + id + '"]').forEach(item => {
      const liked = list.includes(id);
      item.classList.toggle('liked', liked);
      item.setAttribute('aria-pressed', liked);
    });
    updateFavouriteCount();
  });
  addFavouriteButtons(document);
  updateFavouriteCount();
  new MutationObserver(() => addFavouriteButtons(document)).observe(document.body, { childList: true, subtree: true });

  if (selected === 'kids' && document.querySelector('#catalogue-hero')) {
    document.querySelector('#catalogue-hero').src = encodeURI('assets/images/headers-images/kids-header.png');
    document.querySelector('#catalogue-hero').alt = 'Children wearing winter coats';
  }
  let visibleProducts = 8;
  const moreButton = document.querySelector('.catalogue-section .more');
  const catalogueGrid = document.querySelector('.catalogue-products');
  const showCatalogueBatch = () => {
    if (!catalogueGrid) return;
    const searchText = document.querySelector('#site-search')?.value.toLowerCase() || '';
    const mode = document.querySelector('#sort-products')?.value || 'featured';
    const list = products.filter(product => (!selected || product.group === selected) && productMatchesSearch(product, searchText));
    if (mode === 'low') list.sort((a,b) => a.price - b.price);
    if (mode === 'high') list.sort((a,b) => b.price - a.price);
    if (mode === 'name') list.sort((a,b) => a.name.localeCompare(b.name));
    render('.catalogue-products', list.slice(0, visibleProducts));
    const showing = document.querySelector('.catalogue-section .showing');
    if (showing) showing.textContent = 'Showing ' + Math.min(visibleProducts, list.length) + ' of ' + list.length + ' products';
    if (moreButton) {
      moreButton.hidden = visibleProducts >= list.length;
      moreButton.textContent = 'Show more';
    }
  };
  if (catalogueGrid) {
    showCatalogueBatch();
    moreButton?.addEventListener('click', () => { visibleProducts += 4; showCatalogueBatch(); });
    document.querySelector('#sort-products')?.addEventListener('change', () => { visibleProducts = 8; showCatalogueBatch(); });
    document.querySelector('#site-search')?.addEventListener('input', () => { visibleProducts = 8; showCatalogueBatch(); });
  }

  document.querySelectorAll('.site-footer').forEach(footer => {
    if (footer.querySelector('.footer-logos')) return;
    const logos = document.createElement('div');
    logos.className = 'footer-logos';
    const sources = [
      'assets/images/logos/facebook-logo.png', 'assets/images/logos/instagram-logo.png',
      'assets/images/logos/ticktock-logo.png', 'assets/images/logos/whatsapp-logo.png',
      'assets/images/logos/youtube-logo.png', 'assets/images/logos/visa-and-mastercard-logo.png'
    ];
    sources.forEach(source => {
      const image = document.createElement('img');
      image.src = encodeURI(source);
      image.alt = source.includes('visa') ? 'Visa and Mastercard accepted' : source.split('/').pop().replace(' logo.png', '');
      logos.append(image);
    });
    footer.append(logos);
  });

  const map = document.querySelector('#store-map');
  if (map && !window.L) {
    const iframe = document.createElement('iframe');
    iframe.title = 'Map of Overcoats stores in Benoni, Kempton Park and Springs';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.src = 'https://www.google.com/maps?q=Benoni%20Gauteng&z=10&output=embed';
    map.replaceChildren(iframe);
  }
})();

document.querySelector('.header-favourite')?.addEventListener('click', () => {
  let dialog = document.querySelector('#favourites-dialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'favourites-dialog';
    dialog.className = 'favourites-dialog';
    document.body.append(dialog);
    dialog.addEventListener('click', event => { if (event.target === dialog || event.target.closest('[data-close-favourites]')) dialog.close(); });
  }
  const saved = safeArray('overcoats-favourites');
  const chosen = products.filter(product => saved.includes(product.id));
  dialog.innerHTML = '<button class="lightbox-close" data-close-favourites aria-label="Close">x</button><h2>Your favourites</h2>' +
    (chosen.length ? '<div class="favourites-list">' + chosen.map(product => '<a href="product.html?id=' + product.id + '"><img src="' + encodeURI(product.image) + '" alt="' + product.name + '"><span>' + product.name + '<br><small>' + money.format(product.price) + '</small></span></a>').join('') + '</div>' : '<p>You have not saved any coats yet. Tap a heart on a product to add it here.</p>');
  dialog.showModal();
});

// Catalogue, quick-view and location upgrades
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const target = link.getAttribute('href').split('?')[0];
    if (target === path) link.classList.add('current-page');
  });
  const headers = { mens: 'assets/images/headers-images/mens-header.png', womens: 'assets/images/headers-images/womans-header-.png', kids: 'assets/images/headers-images/kids-header.png', all: 'assets/images/headers-images/all-coats-header.png' };
  const hero = document.querySelector('#catalogue-hero');
  if (hero) { hero.src = encodeURI(headers[params.get('group')] || headers.all); hero.alt = (params.get('group') || 'all') + ' coats'; }

  const garments = ['Trench coats','Wool coats','Puffer jackets','Leather jackets','Denim jackets','Bomber jackets','Blazers','Parkas','Raincoats','Faux fur coats','Shearling jackets','Waistcoats'];
  const sizes = ['XXS','XS','S','M','L','XL','XXL','Plus size','One size'];
  const colours = ['Black','Brown','Beige','Cream','Grey','Navy','Green','Burgundy','White'];
  const fabrics = ['Wool','Cashmere','Leather','Faux leather','Suede','Denim','Cotton','Polyester','Nylon','Down-filled','Faux fur','Shearling','Mixed fabrics'];
  products.forEach((p, i) => Object.assign(p, { garment: garments[i % garments.length], size: sizes[i % sizes.length], colour: colours[i % colours.length], fabric: fabrics[i % fabrics.length] }));
  // Apply a URL search only after every searchable product attribute has been added.
  const searchQuery = new URLSearchParams(location.search).get('q');
  if (searchQuery) document.querySelector('#site-search')?.dispatchEvent(new Event('input'));
  const catalogue = document.querySelector('.catalogue-section');
  if (catalogue) {
    const filters = document.createElement('aside');
    filters.className = 'filter-accordion';
    filters.innerHTML = '<h2>Filter coats</h2>' + [['Garment type',garments,'garment'],['Size',sizes,'size'],['Colour',colours,'colour'],['Material / Fabric',fabrics,'fabric']].map(([label,list,key]) => '<details><summary>' + label + '</summary>' + list.map(value => '<label><input type="checkbox" data-filter="' + key + '" value="' + value + '"> ' + value + '</label>').join('') + '</details>').join('') + '<button class="clear-filters" type="button">Clear filters</button>';
    catalogue.prepend(filters);
    const applyFilters = () => {
      const active = [...filters.querySelectorAll('input:checked')];
      const selectedFilters = active.reduce((groups, input) => { (groups[input.dataset.filter] ||= []).push(input.value); return groups; }, {});
      const list = products.filter(p => (!selected || p.group === selected) && Object.entries(selectedFilters).every(([key, values]) => values.includes(p[key])) && productMatchesSearch(p, document.querySelector('#site-search')?.value || ''));
      render('.catalogue-products', list);
      document.querySelector('.showing').textContent = 'Showing ' + list.length + ' of ' + list.length + ' products';
      document.querySelector('.more').hidden = true;
    };
    filters.addEventListener('change', applyFilters);
    filters.querySelector('.clear-filters').onclick = () => { filters.querySelectorAll('input').forEach(input => input.checked = false); applyFilters(); };
  }

  lightbox = function (src, alt) {
    let dialog = document.querySelector('#lightbox');
    const item = products.find(p => p.name === alt) || { name: alt, image: src, price: 0, description: 'Explore this carefully selected outerwear piece.' };
    if (!dialog) { dialog = document.createElement('dialog'); dialog.id = 'lightbox'; dialog.className = 'lightbox product-quickview'; document.body.append(dialog); }
    dialog.innerHTML = '<button class="lightbox-close" aria-label="Close">x</button><div class="quickview-grid"><img src="' + encodeURI(item.image || src) + '" alt="' + item.name + '"><section><h2>' + item.name + '</h2><strong>' + money.format(item.price) + '</strong><p>' + item.description + '</p><p><b>Colour:</b> ' + (item.colour || 'Selected') + '</p><p><b>Size:</b> ' + (item.size || 'M') + '</p><a class="button" href="product.html?id=' + (item.id || 0) + '">View item</a></section></div>';
    dialog.addEventListener('click', event => { if (event.target === dialog || event.target.closest('.lightbox-close')) dialog.close(); }, { once: true });
    dialog.showModal();
  };

  const map = document.querySelector('#store-map');
  if (map) {
    const locations = [
      ['Overcoats Brentwood Park','31 Van Wyk Road, Brentwood Park, Benoni','-26.1278783,28.2861309','https://maps.app.goo.gl/fAvhtsdbhFiVGccS8'],
      ['Coat Corner Kempton Park','79 Pretoria Road, Kempton Park','-26.1113517,28.2301417','https://maps.app.goo.gl/fvirJijBCGQB6gbz7'],
      ['Coat Corner Springs','29 5th Avenue, Springs','-26.25443,28.44154','https://maps.app.goo.gl/qhpN47UqWT2Ac57YA']
    ];
    map.className = 'store-displays';
    map.innerHTML = locations.map(store => '<article><h2>' + store[0] + '</h2><iframe title="' + store[0] + ' map" loading="lazy" src="https://www.google.com/maps?q=' + encodeURIComponent(store[2]) + '&z=16&output=embed"></iframe><p><b>Address</b><br>' + store[1] + '</p><a class="button" target="_blank" rel="noopener" href="' + store[3] + '">Get directions</a></article>').join('');
    document.querySelector('.stores').hidden = true;
  }

  if (false) {
    const heroMain = document.querySelector('.hero');
    const landing = document.createElement('section');
    landing.className = 'landing-intro';
    landing.innerHTML = '<h2>Welcome to Overcoats</h2><video controls preload="metadata"><source src="assets/video/overcoat-promo.mp4" type="video/mp4"></video><p>Discover quality pre-loved outerwear, thoughtfully chosen for every story and every season.</p><div><a class="button" href="catalogue.html?group=womens">Womens catalogue</a><a class="button" href="catalogue.html?group=mens">Mens catalogue</a></div>';
    heroMain.after(landing);
  }
})();
// Product community and News navigation
document.querySelectorAll('.primary-nav').forEach(nav => { if (!nav.querySelector('a[href="trends.html"]')) { const link=document.createElement('a'); link.href='trends.html'; link.textContent='News & Trends'; nav.insertBefore(link, nav.querySelector('span') || null); }});
if (document.querySelector('.product-detail')) { const community=document.createElement('section'); community.className='product-community'; community.innerHTML='<h2>Customer comments</h2><p><b>Liked by <span class="demand-count">60</span> customers</b></p><div class="comments"><p><b>@LaurenWilliams</b><br>This is a beautiful jacket. I love the shape and finish.</p><p><b>Philip D Van Wyk</b><br>I have this in my cart already - excellent quality.</p><p><b>Melissa45</b><br>Second-hand style with so much personality.</p></div><form class="comment-form"><label>Add a comment<textarea required></textarea></label><button class="button">Post comment</button></form>'; document.querySelector('.product-detail').append(community); community.querySelector('form').onsubmit=e=>{e.preventDefault();const text=e.currentTarget.querySelector('textarea').value.trim();if(!text)return;const p=document.createElement('p');p.innerHTML='<b>You</b><br>';p.append(text);community.querySelector('.comments').append(p);e.currentTarget.reset();}; }
// Correct active navigation and use the supplied bright-heart asset.
document.querySelectorAll('nav a').forEach(link => {
  link.classList.remove('current-page');
  const href = link.getAttribute('href');
  const target = href.split('?')[0];
  const linkGroup = new URLSearchParams(href.split('?')[1] || '').get('group');
  const currentGroup = new URLSearchParams(location.search).get('group');
  const active = target === 'catalogue.html'
    ? location.pathname.endsWith('catalogue.html') && (linkGroup ? linkGroup === currentGroup : !currentGroup)
    : target === (location.pathname.split('/').pop() || 'index.html');
  if (active) link.classList.add('current-page');
});
document.querySelectorAll('.favourite img,.header-favourite img').forEach(image => {
  image.src = 'assets/images/pngbrighterheart.png';
  image.alt = 'Favourite';
});

// Resilient favourites button and panel.
(function () {
  const favouriteItems = () => safeArray('overcoats-favourites');
  document.querySelectorAll('.icons').forEach(box => {
    let control = box.querySelector('.header-favourite');
    if (!control) {
      control = document.createElement('button');
      control.type = 'button';
      control.className = 'header-favourite';
      box.prepend(control);
    }
    control.innerHTML = '<img src="assets/images/pngbrighterheart.png" alt="Favourite products"><b class="favourite-count">0</b>';
    control.setAttribute('aria-label', 'View favourite products');
    control.onclick = () => {
      document.querySelector('#favourites-dialog')?.close();
      let panel = document.querySelector('#favourites-panel');
      if (!panel) {
        panel = document.createElement('aside');
        panel.id = 'favourites-panel';
        panel.className = 'favourites-panel';
        document.body.append(panel);
      }
      const saved = favouriteItems();
      const chosen = products.filter(product => saved.includes(product.id));
      panel.innerHTML = '<button type="button" class="favourites-close" aria-label="Close favourites">x</button><h2>Your favourites</h2>' + (chosen.length ? '<div class="favourites-list">' + chosen.map(product => '<a href="product.html?id=' + product.id + '"><img src="' + encodeURI(product.image) + '" alt="' + product.name + '"><span>' + product.name + '<br><small>' + money.format(product.price) + '</small></span></a>').join('') + '</div>' : '<p>No favourites saved yet. Select the heart on a product to add it here.</p>');
      panel.hidden = false;
      panel.querySelector('.favourites-close').onclick = () => { panel.hidden = true; };
    };
  });
  document.querySelectorAll('.favourite-count').forEach(count => count.textContent = favouriteItems().length);
})();
// Human-friendly names for the expanded product inventory.
const inventoryNames = {
  women: ['Avery Trench Coat','Isla Wool Overcoat','Mila Belted Mac','Sage Puffer Coat','Elodie Check Coat','Cleo Faux Fur Jacket','Nora Tailored Blazer','Lydia Raincoat','Maya Suede Jacket','Romy Longline Coat','Freya Double-Breasted Coat','Ivy Quilted Jacket','Thea Camel Coat','Ada Winter Parka','Vera Denim Jacket','Clara Cashmere Coat','Esme Wrap Coat','Olive Utility Jacket','Grace Wool Peacoat','Rosie Shearling Coat'],
  men: ['Arthur Wool Overcoat','Theo Field Jacket','Finn Quilted Coat','Hugo Trench Coat','Miles Bomber Jacket','Oliver Parka','Jasper Peacoat','Levi Leather Jacket','Henry Check Blazer','Noah Raincoat','Elliot Denim Jacket','Oscar Wool Coat','Caleb Puffer Jacket','George Car Coat','Felix Suede Jacket','Alfie Harrington Jacket','Daniel Longline Coat','Samuel Utility Coat','James Winter Jacket','Benjamin Tailored Coat'],
  kids: ['Sunny Mini Puffer','Ruby Raincoat','Theo Junior Parka','Poppy Teddy Coat','Max Explorer Jacket','Lola Wool Coat','Milo Storm Jacket','Bella Quilted Coat','Leo Mini Bomber','Daisy Fleece Jacket','Archie Winter Coat','Evie Faux Fur Coat','Finn Adventure Parka','Sophie Check Coat','Ollie Denim Jacket','Mia Mini Mac','Henry Hooded Puffer','Ella Warm-Up Coat','Jack Junior Peacoat','Zoe Cosy Jacket','Charlie Trail Coat','Iris Snow Jacket','George Junior Coat']
};
const inventoryNameIndex = { women: 0, men: 0, kids: 0 };
inventoryProducts.forEach(product => {
  const names = inventoryNames[product.group];
  product.name = names[inventoryNameIndex[product.group]++ % names.length];
});document.querySelectorAll('.product-card h3 a').forEach(link => { const item=products[Number(new URL(link.href).searchParams.get('id'))]; if(item){link.textContent=item.name;const card=link.closest('.product-card');card.dataset.name=(item.name+' '+item.description+' '+item.group).toLowerCase();const image=card.querySelector('img');if(image)image.alt=item.name;} });
// Trends and News imagery from the supplied asset inventory.
(function () {
  const visuals = {
    'article-luxury.html': [
      'assets/images/trends-and-news/article-1-the-art-of-secondhand-luxury/7fs3heqn_ydrxchuax_tchonujklu51xvkbmwqk-5a7v0x7kagphkwpg1ik7rtkq6u7s3ffmcv31hqc1vlanufskvtrlrwtqs2eojqfiznqekw15bnaa-nd5g6bo12elvkrxzgllpu2wp2hwpeo3dn2aaa6tm5i44gn8qcdvfrki0vjbnplcssj20tj6gpsb.jpeg',
      'assets/images/trends-and-news/article-1-the-art-of-secondhand-luxury/znnqd25rs24_rhwpt0yofjlreeg0hl3yaapap7mzgqdosx2rmvdfar_1y_yjwbvms_zimsvpcvlajykhu3i_15bcufppo0w41qcradvppa2ssur9htfx78zx8md8pprdp9wekyal87b0gfyycyngbj6ldfvygcbqsyzjwfc95zgruyxlr1gw2tgalatshh1c.jpeg'
    ],
    'article-bias.html': [
      'assets/images/trends-and-news/atricle-2-why-are-we-still-so-hesitant/thrifting.jpg.webp',
      'assets/images/trends-and-news/atricle-2-why-are-we-still-so-hesitant/o-vzlqyp2edwsycbana5kldl2jhe0q2h-xufvt_rxucihi5pkm9jo4pwvxovfllz68pwg3hgy_couqrgqc5gwol6no7wl6mngnepkjc9unxpf4wumy64mvu2-_wgwfqjf40jbsts7wbst4rawmsdhpvbxvlwygpraxdyy9pfg9y15ftzffbbfbwe1k58lyc4.jpeg'
    ],
    'article-hygiene.html': [
      'assets/images/trends-and-news/article-4-how-professional-retailers-clean-and-sanitise-recycled-clothing/cleaning8.jpg',
      'assets/images/trends-and-news/article-4-how-professional-retailers-clean-and-sanitise-recycled-clothing/cleaning-3.jpg',
      'assets/images/trends-and-news/article-4-how-professional-retailers-clean-and-sanitise-recycled-clothing/cleaning6.jpg'
    ],
    'article-benefits.html': [
      'assets/images/trends-and-news/article-3-the-benefits-of-buying-second-hand-coats-and-jackets/imagesthrift.jpeg',
      'assets/images/trends-and-news/article-3-the-benefits-of-buying-second-hand-coats-and-jackets/choosing-clothes-in-vintage-clothing-store-togethe-2025-02-11-09-31-23-utc-e1742800697889-1024x1024.jpg',
      'assets/images/trends-and-news/article-3-the-benefits-of-buying-second-hand-coats-and-jackets/imagesclothessthrift.jpeg'
    ]
  };
  const page = location.pathname.split('/').pop();
  if (page === 'trends.html') {
    document.querySelectorAll('.news-grid a').forEach(link => {
      const src = visuals[link.getAttribute('href')]?.[0];
      if (!src) return;
      const image = document.createElement('img');
      image.src = encodeURI(src); image.alt = link.textContent.trim();
      link.prepend(image);
    });
  }
  if (visuals[page] && document.querySelector('.full-article')) {
    const gallery = document.createElement('div'); gallery.className = 'article-gallery';
    visuals[page].forEach((src, index) => { const image=document.createElement('img'); image.src=encodeURI(src); image.alt='Article image '+(index+1); image.loading=index?'lazy':'eager'; gallery.append(image); });
    document.querySelector('.full-article').prepend(gallery);
  }
})();
// Article-specific editorial typography.
(function () {
  const page = location.pathname.split('/').pop();
  const type = {'article-luxury.html':'article-luxury','article-bias.html':'article-bias','article-hygiene.html':'article-hygiene','article-benefits.html':'article-benefits'}[page];
  if (!type) return;
  document.body.classList.add(type);
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Space+Grotesk:wght@400;600;700&display=swap';
  document.head.append(link);
})();if (document.querySelector('.article-page')) document.querySelectorAll('.article-page .news-grid').forEach(grid => grid.remove());
// Reliable local News image paths.
(function () {
  const safeImages = {
    'article-bias.html': ['assets/images/news/hesitant-1.webp','assets/images/news/hesitant-2.jpeg'],
    'article-hygiene.html': ['assets/images/news/Cleaning1.jpg','assets/images/news/Cleaning2.jpg','assets/images/news/cleaning-3.jpg','assets/images/news/cleaning-4.jpg','assets/images/news/Cleaning6.jpg','assets/images/news/Cleaning7.jpg','assets/images/news/Cleaning8.jpg','assets/images/news/cleaning10.jpg','assets/images/news/Cleaning11.jpg','assets/images/news/cleaning13.jpg','assets/images/news/cleaning15.jpg']
  };
  const page = location.pathname.split('/').pop();
  const add = (gallery, list) => list.forEach((src, index) => { const image=document.createElement('img'); image.src=src; image.alt='Article image '+(index+1); image.loading=index?'lazy':'eager'; gallery.append(image); });
  if (safeImages[page]) {
    const gallery=document.querySelector('.article-gallery');
    if (gallery) { gallery.replaceChildren(); add(gallery,safeImages[page]); }
  }
  if (page === 'trends.html') {
    Object.entries(safeImages).forEach(([article,list]) => {
      const image=document.querySelector('.news-grid a[href="' + article + '"] img');
      if (image) image.src=list[0];
    });
  }
})();
// Structured typography for the two long-form articles.
(function () {
  const page=location.pathname.split('/').pop();
  if (!['article-bias.html','article-benefits.html'].includes(page)) return;
  const article=document.querySelector('.full-article');
  const source=article?.querySelector('p');
  if (!source) return;
  const sentences=source.textContent.trim().match(/[^.!?]+[.!?]+/g) || [source.textContent.trim()];
  const groups=[];
  for(let i=0;i<sentences.length;i+=3) groups.push(sentences.slice(i,i+3).join(' ').trim());
  article.replaceChildren();
  groups.forEach((text,index) => {
    const paragraph=document.createElement('p');
    paragraph.className=index%2?'article-copy-alt':'article-copy-main';
    if(index===0) paragraph.classList.add('article-intro');
    paragraph.textContent=text;
    article.append(paragraph);
  });
})();
// Correct numbered section structure for The Art of Secondhand Luxury.
(function () {
  if (location.pathname.split('/').pop() !== 'article-luxury.html') return;
  const article=document.querySelector('.full-article');
  const paragraphs=[...article.querySelectorAll('p')].map(p=>p.textContent.trim());
  if (!paragraphs.length) return;
  const text=paragraphs.slice(3).join(' ');
  const headings=[
    'THE WOMAN: EFFORTLESSLY ELEGANT, BEAUTIFULLY STYLED',
    '2. THE MAN: QUIET LUXURY AND TIMELESS SOPHISTICATION',
    '3. THE FIVE SECRETS TO MAKING SECONDHAND CLOTHES LOOK EXPENSIVE',
    '4. THE ART OF SHOPPING SECONDHAND',
    '5. HIS & HERS: FIVE LUXURY LOOKS ON A SECONDHAND BUDGET',
    '6. SUSTAINABILITY IS THE NEW LUXURY'
  ];
  const positions=headings.map(heading=>text.indexOf(heading));
  if (positions.some(position=>position<0)) return;
  article.replaceChildren();
  headings.forEach((heading,index)=>{
    const start=positions[index]+heading.length;
    const end=index<headings.length-1?positions[index+1]:text.length;
    const section=document.createElement('section'); section.className='luxury-section';
    const headingEl=document.createElement('h2'); headingEl.textContent=heading.replace(/^\d\.\s*/,'');
    section.append(headingEl);
    const sentences=text.slice(start,end).trim().match(/[^.!?]+[.!?]+/g)||[text.slice(start,end).trim()];
    for(let i=0;i<sentences.length;i+=3){const paragraph=document.createElement('p');paragraph.textContent=sentences.slice(i,i+3).join(' ');section.append(paragraph);}
    article.append(section);
  });
})();
// Scatter Luxury article images through the numbered sections.
(function () {
  if (location.pathname.split('/').pop() !== 'article-luxury.html') return;
  const sections=[...document.querySelectorAll('.luxury-section')];
  const images=['assets/images/news/luxury-1.jpeg','assets/images/news/luxury-2.jpeg','assets/images/news/luxury-3.jpeg'];
  [0,2,4].forEach((sectionIndex,imageIndex)=>{
    const section=sections[sectionIndex]; if(!section) return;
    const figure=document.createElement('figure'); figure.className='luxury-image luxury-image-'+(imageIndex+1);
    const image=document.createElement('img'); image.src=images[imageIndex]; image.alt='Secondhand luxury style inspiration';
    figure.append(image); section.after(figure);
  });
})();
(() => {
  const articleImages = {
    'article-bias.html': ['assets/images/news/hesitant-1.webp', 'assets/images/news/hesitant-2.jpeg'],
    'article-hygiene.html': ['assets/images/news/Cleaning1.jpg', 'assets/images/news/Cleaning2.jpg', 'assets/images/news/cleaning-3.jpg', 'assets/images/news/cleaning-4.jpg', 'assets/images/news/Cleaning6.jpg', 'assets/images/news/Cleaning7.jpg', 'assets/images/news/Cleaning8.jpg', 'assets/images/news/cleaning10.jpg', 'assets/images/news/cleaning11.jpg', 'assets/images/news/cleaning13.jpg', 'assets/images/news/cleaning15.jpg'],
    'article-benefits.html': ['assets/images/news/benefits-1.jpeg', 'assets/images/news/benefits-2.jpg', 'assets/images/news/benefits-3.jpeg']
  };
  const page = location.pathname.split('/').pop();
  const images = articleImages[page];
  const article = document.querySelector('.full-article');
  if (!article || !images) return;
  article.querySelector('.article-gallery')?.remove();
  article.querySelectorAll('.scattered-article-image').forEach((image) => image.remove());
  const paragraphs = [...article.querySelectorAll(':scope > p')];
  if (!paragraphs.length) return;
  images.forEach((src, index) => {
    const paragraphIndex = Math.min(paragraphs.length - 1, Math.floor(((index + 1) * paragraphs.length) / (images.length + 1)));
    const figure = document.createElement('figure');
    figure.className = 'scattered-article-image image-' + (index % 3);
    const image = document.createElement('img');
    image.src = src;
    image.alt = 'Supporting image for this article';
    image.loading = index < 2 ? 'eager' : 'lazy';
    figure.append(image);
    paragraphs[paragraphIndex].after(figure);
  });
})();

/* Replace the collection hero with the complete, current slideshow inventory. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const images = ["screenshot-2026-11-06-at-12.19.49.png","screenshot-2026-11-06-at-12.41.12.png","screenshot-2026-11-06-at-14.16.29.png","screenshot-2026-11-06-at-14.17.55.png","screenshot-2026-11-06-at-14.18.36.png","screenshot-2026-11-06-at-14.19.23.png","screenshot-2026-11-06-at-14.19.32.png","screenshot-2026-11-06-at-14.19.41.png","screenshot-2026-11-06-at-14.19.53.png","screenshot-2026-11-06-at-14.20.08.png","screenshot-2026-11-06-at-14.20.36.png","screenshot-2026-11-06-at-14.21.24.png","screenshot-2026-11-06-at-14.26.53.png","screenshot-2026-11-06-at-14.28.02.png","screenshot-2026-11-06-at-14.28.21.png","screenshot-2026-11-06-at-14.28.47.png","screenshot-2026-11-04-at-13.20.08.png"];
  let show = hero.querySelector('.collection-slideshow');
  if (!show) {
    show = document.createElement('div');
    show.className = 'collection-slideshow';
    hero.prepend(show);
  }
  show.replaceChildren();
  images.forEach((file, index) => {
    const image = document.createElement('img');
    image.className = 'slide' + (index === 0 ? ' active' : '');
    image.src = 'assets/images/slideshow-coats/' + file;
    image.alt = 'Overcoats collection look ' + (index + 1);
    image.loading = index < 2 ? 'eager' : 'lazy';
    show.append(image);
  });
  let active = 0;
  window.clearInterval(window.overcoatsSlideshowTimer);
  window.overcoatsSlideshowTimer = window.setInterval(() => {
    const slides = show.querySelectorAll('.slide');
    slides[active].classList.remove('active');
    active = (active + 1) % slides.length;
    slides[active].classList.add('active');
  }, 4000);
})();

(() => {
  const promo = document.querySelector('.promo');
  if (!promo || promo.dataset.slideshowReady) return;
  const slides = [...promo.querySelectorAll('.promo-slide')];
  if (slides.length < 2) return;
  promo.dataset.slideshowReady = 'true';
  let active = 0;
  window.setInterval(() => {
    slides[active].classList.remove('active');
    active = (active + 1) % slides.length;
    slides[active].classList.add('active');
  }, 4500);
})();

/* Compact mobile navigation for the shared header. */
(() => {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (!header || !nav || header.querySelector('.mobile-menu-toggle')) return;
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-menu-toggle';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'Pages and options';
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? 'Close menu' : 'Pages and options';
  });
  header.querySelector('.header-main').after(toggle);
})();

/* Bind the always-present compact navigation control. */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.mobile-menu-toggle');
  if (!header || !toggle || toggle.dataset.bound) return;
  toggle.dataset.bound = 'true';
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? 'Close menu' : 'Pages and options';
  });
})();

/* Put one shared search bar beneath the header navigation. */
(() => {
  const header = document.querySelector('.site-header');
  const shell = header?.querySelector('.header-shell');
  const search = header?.querySelector('.search-bar');
  if (header && shell && search && search.parentElement !== header) shell.after(search);
})();

// Client-side privacy and input hardening. Sensitive payment data is never stored here.
function safeArray(key) { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? value.filter(Number.isInteger) : []; } catch { try { localStorage.removeItem(key); } catch {} return []; } }
document.querySelectorAll('form input:not([type="hidden"]), form textarea').forEach(field => {
  if (!field.maxLength || field.maxLength > 1500) field.maxLength = field.tagName === 'TEXTAREA' ? 1500 : 120;
  field.addEventListener('paste', () => setTimeout(() => { field.value = field.value.trim().slice(0, field.maxLength); }));
});
document.querySelectorAll('a[target="_blank"]').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
