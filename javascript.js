let element= document.getElementById('bilal')
function namaz() {
   const namaz=['(Surah Fatiha) سُوْرَۃُ الفَاتِحَة','(Surah Bakarakh)سُوْرَۃُ البَقَرَة','(Surah Alay Imran)سُوْرَۃ آلِ عِمْرَان'
   ,'(Surah Nisa)سُوْرَۃُ النِّسَاء','(Surah Maidah)سُوْرَۃُ المَائِدَة','(Surah Anam)سُوْرَۃُ الأَنْعَام','(Surah A’araf)سُوْرَۃُ الأَعْرَاف'
,'(Surah Anfal)سُوْرَۃُ الأَنْفَال','(Surah Toba)سُوْرَۃُ التَّوْبَة','(Surah Younas)سُوْرَۃ يُونُس','(Surah Hud)سُوْرَۃ هُود'
,'(Surah Yousaf)سُوْرَۃ يُوسُف','(Surah Ra’ad)سُوْرَۃ الرَّعْد','(Surah Ibrahim)سُوْرَۃُ إِبْرَاهِيم','(Surah Hijr)سُوْرَۃُ الحِجْر'
,'(Surah Nahl)سُوْرَۃُ النَّحْل','(Surah Isara)سُوْرَۃُ الإِسْرَاء','(Surah Kahf)سُوْرَۃ الكَهْف','(	Surah Maryam)سُوْرَۃ مَرْيَم'
,'(Surah Taha)سُوْرَۃ طٰهٰ','(Surah Anbia)سُوْرَۃُ الأَنْبِيَاء','(	Surah Hajj)سُوْرَۃ الحَجّ','(Surah Momineen)سُوْرَۃُ المُؤْمِنُون'
,'(	Surah Nur)سُوْرَۃ النُّور','(Surah Furqan)سُوْرَۃ الفُرْقَان','(Surah Shu’ara)سُوْرَۃُ الشُّعَرَاء','(Surah Namal) سُوْرَۃُ النَّمْل'
,'(Surah Qasas)	سُوْرَۃُ القَصَص','(Surah Ankabut)	سُوْرَۃُ العَنْكَبُوت','(Surah Room)سُوْرَۃ الرُّوم','(Surah Luqman)سُوْرَۃ لُقْمَان','(Surah Sajda)سُوْرَۃُ السَّجْدَة'
,'(Surah Ahzaab)سُوْرَۃُ الأَحْزَاب','(Surah Saba)سُوْرَۃ سَبَأ','(Surah Fatir)سُوْرَۃ فَاطِر','(Surah Ya-Sin)سُوْرَۃ يٰس','(Surah Saaffaat)سُوْرَۃُ الصَّافَّات'
,'(Surah Saad)سُوْرَۃ ص','(Surah Zamar)سُوْرَۃُ الزُّمَر','(Surah Ghafir)سُوْرَۃ غَافِر','(Surah Fussilat)سُوْرَۃ فُصِّلَت','(Surah Shurah)سُوْرَۃُ الشُّورىٰ'
,'(Surah Zukhraf)سُوْرَۃُ الزُّخْرُف','(Surah Dukhan)سُوْرَۃ الدُّخَان','(Surah Jasiz)سُوْرَۃ الجَاثِيَة','(Surah Ahqaaf)سُوْرَۃُ الأَحْقَاف','(Surah Muhammad)سُوْرَۃ مُحَمَّد'
,'(Surah Fatah)سُوْرَۃُ الفَتْح','(Surah Hujraat)سُوْرَۃُ الحُجُرَات','(Surah Qaaf)سُوْرَۃ ق','(Sura Az Zariat)سُوْرَۃُ الذَّارِيَات','(Surah Toor)سُوْرَۃ الطُّور'
,'(Surah Najm)سُوْرَۃُ النَّجْم','(Surah Qamar)سُوْرَۃُ القَمَر','(Surah Rehman)سُوْرَۃ الرَّحْمَٰن','(Surah Waqia)سُوْرَۃُ الوَاقِعَة','(Surah Hadeed)سُوْرَۃُ الحَدِيد'
,'(Surah Mujadila)سُوْرَۃُ المُجَادِلَة','(Surah Hashr)سُوْرَۃُ الحَشْر','(Surah Mumtahana)سُوْرَۃُ المُمْتَحَنَة','(Surah Saff)سُوْرَۃُ الصَّفّ','(Surah Jum’a)سُوْرَۃُ الجُمُعَة'
,'(Surah Munafiqeen)سُوْرَۃُ المُنَافِقُون','(Surah Taghabun)سُوْرَۃُ التَّغَابُن','(Surah Talaq)سُوْرَۃُ الطَّلَاق','(Surah Tehreem)سُوْرَۃُ التَّحْرِيم','(Surah Mulk)سُوْرَۃُ المُلْك'
,'(Surah Qalam)سُوْرَۃ القَلَم','(Surah Haaqqa)سُوْرَۃ الحَاقَّة','(Surah Ma’arij)سُوْرَۃُ المَعَارِج','(Surah Nooh)سُوْرَۃ نُوح','(Surah Jinn)سُوْرَۃُ الجِنّ'
,'(Surah Muzzammil)سُوْرَۃُ المُزَّمِّل','(Surah Muddassir)سُوْرَۃُ المُدَّثِّر','(Surah Qiyamah)سُوْرَۃُ القِيَامَة','(Surah Al Insaan)سُوْرَۃُ الإِنْسَان','(Surah Mursalaat)سُوْرَۃُ المُرْسَلَات'
,'(Surah Naba)سُوْرَۃُ النَّبَأ','(Surah An Naaziat)سُوْرَۃُ النَّازِعَات','(Surah Abasa)سُوْرَۃ عَبَسَ','(Surah Takweer)سُوْرَۃُ التَّكْوِير','(Surah Infitar)سُوْرَۃُ الإِنْفِطَار'
,'(Surah Mutaffifeen)سُوْرَۃُ المُطَفِّفِين','(Surah Inshiqaaq)سُوْرَۃُ الإِنْشِقَاق','(Surah Burooj)سُوْرَۃُ البُرُوج','(Surah Tariq)سُوْرَۃُ الطَّارِق','(Surah A’ala)سُوْرَۃُ الأَعْلَىٰ'
,'(Surah Ghashia)سُوْرَۃُ الغَاشِيَة','(Surah Fajr)سُوْرَۃُ الفَجْر','(Surah Balad)سُوْرَۃُ البَلَد','(Surah Shams)سُوْرَۃُ الشَّمْس','(Surah Al Lail)	سُوْرَۃُ اللَّيْل'
,'(Surah Zuha)سُوْرَۃُ الضُّحَىٰ','(Surah Sharh (Inshirah))سُوْرَۃُ الشَّرْح','(Surah Teen)سُوْرَۃُ التِّين','(Surah Alaq)سُوْرَۃُ العَلَق','(Surah Qadr)سُوْرَۃُ القَدْر'
,'(Surah Bayyinah)سُوْرَۃُ البَيِّنَة','(Surah Zalzalah)سُوْرَۃُ الزَّلْزَلَة','(Surah Aadiat)سُوْرَۃُ العَادِيَات','(Surah Qariah)	سُوْرَۃُ القَارِعَة','(Sura Takasur)سُوْرَۃُ التَّكَاثُر'
,'(Surah Asr)سُوْرَۃُ العَصْر','(Surah Humaza)سُوْرَۃُ الهُمَزَة','(Surah Feel)سُوْرَۃُ الفِيل','(Surah Quraish)سُوْرَۃ قُرَيْش','(Surah Maoon)سُوْرَۃُ المَاعُون'
,'(Surah Kausar)سُوْرَۃُ الكَوْثَر','(Surah Kaafiroon)سُوْرَۃُ الكَافِرُون','(Surah Nasr)سُوْرَۃُ النَّصْر','(Surah Masad)سُوْرَۃُ المَسَد','(Surah Ikhlaas)سُوْرَۃُ الإِخْلَاص'
,'(Surah Falaq)	سُوْرَۃُ الفَلَق','(Surah Naas)سُوْرَۃُ النَّاس']
  let print=document.getElementById('ali').value
  for (let i = 0; i <print; i++) {
   element.innerHTML=namaz[i]
    
  }
   
  

}