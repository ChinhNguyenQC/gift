let imgList =[
    "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/597242650_4435036436724603_1234943936712928122_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFM-C7NbgZDdWrkn62ZW8tt-bQotYI0Hyz5tCi1gjQfLHp3Q1Uo6ffAbB_IhlGJYAV_i3dtqRB3mc2Lt5QYJJDU&_nc_ohc=cXtAXADq0cwQ7kNvwEiKjG2&_nc_oc=AdkURM2DrOyvQNvaf17zojb_e4--2aXfcKpJZLmSzOJypvAFXLExdCaIr80jstgLKW8&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=wvvpXlzlXfZ3AKpmpI4J_A&oh=00_AfmjJu31MNEitJOyLN_xGhZQ3fwO3sw5T0GXa8nW2L9DPA&oe=693C9A10",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596713377_4435042346724012_8932757877423299627_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHQDN-dEK87pcb_zhoGi8YDwUzIjYzMHwTBTMiNjMwfBMTGGKwhe1DmUdKwTCAMpZXMCZD8FUerpYtvPDJNelMQ&_nc_ohc=XMX3446BoSYQ7kNvwGhUeE4&_nc_oc=Adk-OWSOVbq-H2jOUy-ONqzjZAc2wARsvqgVb5snpWNIhjN2PxHGuxUcbI4Q-kklsGs&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afkc79pw-fT4wh0xWy99wWhm7SWafRW_Sun6kMCO_xY08A&oe=693CADD0",
    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/597161890_4435042343390679_5083100969950983008_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGZVk6sdMrbJN40yEyXG7HQiJYc8BiEFXSIlhzwGIQVdNsLLcwaX8iWwUv7x-cpkiTEuHDGXxRzb_ZY9vY6ZQZu&_nc_ohc=McVVjo3PrTAQ7kNvwFEnUvH&_nc_oc=AdmPAyUSEefV46MuGdeaVxfRnV9gPWmS1eaLmc9aZkwJBP63JJ02xdiviRj18gvs9f4&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afkib5ZhU4TbVmKYLq-zoZt_EFeKAm-j2fIsmXrZoNdsAQ&oe=693CCC55",
    "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/595699185_4435042373390676_7405230343187440677_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFDyPKdZZl3GrHATFF_b_MifWypJi5fCPp9bKkmLl8I-rRmeE2aW2kUwn4km6DnOnCAw7UXDDODT5x1D7uuSiFJ&_nc_ohc=ESd-6i1GfRsQ7kNvwF_RzRm&_nc_oc=AdnZTy_Oht998d0GFQNHFzGaQWeM0miXqsgihm7ILnn3gYCAg4ROHoTtMxT0yuGNCNI&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AflZH4ofDoYKXg5GB-_GHpbUKfn-ovFGjebwGSwra__d8A&oe=693CC818",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596366278_4435042436724003_8994322341590068737_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEX6T8q3dZ8X_yl4fPbfO7CxnTVGZCSPKzGdNUZkJI8rEIwFyNvmOManvtAbIS0q12pas6oq7GkUjd_bx6LYGSm&_nc_ohc=rvdhTJ9xmlsQ7kNvwERYG7z&_nc_oc=AdknIcjxGGtXHo94uTchEpCaK5sHjGL8DrG5zbY0fluvLz4YzqQvEIMzzpRY7fgNTsY&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkvQG_dLWt1qzQ7ELhPEgXTSUO62x2rcGfZXFD4yJNq0A&oe=693CA1D0",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596492799_4435042433390670_5574331121830200882_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF6EoD8WP_x_NpqVBEm1KQFb4fhYZ7HUQNvh-FhnsdRA7gUIBaE8Q8rg8QKH1IzE6iL5JLI6ndahQ8OI8qDPx6v&_nc_ohc=aoUCXoFFBMgQ7kNvwHiRa8N&_nc_oc=AdnIOVkKcdBf3WCDE-QlaH5Or_iQIqLwOZwXiICpl_10_Jhauoos23F9TB7IyEtXAjU&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afk1py0_JCxX_Vt4ksoEKX-4JYVebnpvUc8e5s7QXf_iCg&oe=693C9DA7",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/595754215_4435042463390667_2579324444651878776_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG4sbfryRoVUQyFnoNUoCb_zdGB5zfbVM7N0YHnN9tUzkper1pNHAgz7M6fY6ty7FAtwt0yMYQj98JfTiB2Mpqx&_nc_ohc=Qori1H2XfgUQ7kNvwH0tght&_nc_oc=AdnC160xdPmiLLqEvds2VDtY_rOMcWABk3acAIhkduJCa7vZR5Qkkud2kvvlx4NGJ98&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfnDNhPFCJzFrDaaOtSXVmRfAgIQxLTzNH-RsuLLiQkcag&oe=693CB089",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/597153926_4435042553390658_716103977967102805_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEVGTQNYVTZ4ZHO-JSzEwQkgc1EXfdoNdGBzURd92g10eLb3QdARFDWh1tnCDv3gWFL5fIZUMMEF1PtsqEBFt01&_nc_ohc=tfycYGpVGlUQ7kNvwGuB7I5&_nc_oc=Admbd-jnl7wsUS1gtu7u3PkMZdIKW2p-lSmhRxq2Eoi6b6tMv0CT-tg4dwHgzsfasGs&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfmzuEh6lTGZLx4ysq7_ft3YjGFUUMiq7F0Sw-P7jvrIJw&oe=693CA94B",
    "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/596498581_4435042566723990_236620084041465002_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG5eeblRc9xZkRW3VriEI-4IHpzNWadW9EgenM1Zp1b0YSeMpoNGksV4keoy6XeY-pyz5pSSaLuiQktRvK2Ry_p&_nc_ohc=-YlxRF6bmTUQ7kNvwF45eoN&_nc_oc=AdmP6PttrOBeeJJ19wrot5kqESAGh797IQKy-5OsZ_R79dzYiMNftZ8ehSJx5iqT2Fc&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afmx_o5dMIwYiqRefip5AR1oVQuPakcdstfLvK6kPMkrzw&oe=693CC4AE",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596935336_4435042593390654_7364571637054234782_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHdM_n7JCA51DhRDfyliZiKgdXa3EiEf0aB1drcSIR_Rlz2dXclut3neNqQudGkL6AlV5pgtkSrQkyHFLCqwAoW&_nc_ohc=w6k6Sds1MiIQ7kNvwHUTFay&_nc_oc=AdnF_QiYlWCE72j4FI6xiRSJoI8q5s0BExRwcpZJ40c9QPZsOxFQ5B6jULHdZhR98Bw&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afn7ZAkuhaCVFPnaeehW6nSBp0_NEcOEMF_L7M_Ei-RcOg&oe=693CB0EA",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/595280100_4435042663390647_5599867131595969733_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHwfSsfYrsb4gWKk5WpcNacIlHB-4dt9JMiUcH7h230k7frW-aEGDY23h4hT4MyD-EL624vTe4DDJgoaimRYt5D&_nc_ohc=WXwvBEF5pc8Q7kNvwGtQSSU&_nc_oc=AdkuP6AVOLAsSmPA-s6CceHzApwuLhYxPwsYWbL9Ncyr2RfXA4Qtz8iSu8BIcS-nDoE&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AflQjc6aI937qPss-DOYuj9ITZsb81d2ZEHV_YSAIHGKCw&oe=693C9712",
    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/596863778_4435042666723980_6708990206071875996_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFCx3Fdcw5Cx97FozUXdJ1-tfXjx90FBSe19ePH3QUFJ3aH6ANsudjCW29wBQL3zaXr86IN5bwnQFbuJhZ_owYU&_nc_ohc=AnkKPR5rks4Q7kNvwFF-mjx&_nc_oc=Adl157ryARilebEVOp1iRWwfH5R5t4CyzVI-3Od1fdyzQGwBnmeLIVdt4keWpWXwRLY&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkM_RfJaWnLE0C7nBSE5xGbPEYxKMU4ZtRXWpWmGKfilA&oe=693CA41C",
    "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/596944189_4435042693390644_2091579230399969019_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGUlmvlQJhqcp6dAMCSavy1RtLWS68YMuNG0tZLrxgy4xNSfkz2gksHZPQ4nE06jyrpZeQ3gINf7Hyzd7dXx-8u&_nc_ohc=qXux0q0hetoQ7kNvwHO-3Sc&_nc_oc=AdlZV2sqL4LjbfWpbnH_UpP0q4scCxXoS3rHu2sTkA73BrXunq5i2cxxE4eMASaG6T4&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkrVSgYswMiggAFziDTGO14AQl2jNuDeS-5edtjQVqQ8g&oe=693CC95B",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/593822108_4435042796723967_1234474722534044416_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF3WIIZuQTXDNryxDML6Ep_7hraN_1JsWTuGto3_UmxZBH0H1IASCpb669X7TPUMtK7qfvnl9GOTtI7IsfXNxi-&_nc_ohc=VKIu_ap1McwQ7kNvwHykxps&_nc_oc=AdmIe6PNuaNdTEtl_jrcnsMazhgLgT8hrxOS0lXbtxRVSCHwLbC4mBDiONvRcigEaEY&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfnmoA6ovx0EJrKUfZgR5sO_d1oMGFHw6Sq6idbG_9l5dQ&oe=693C9DD3",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/597380849_4435042803390633_8775389681426434474_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGjoyOD8zykHeDR2O-ItaVn2FW-1DoSwcDYVb7UOhLBwB8z2x_p0r02aoShRG1OPX7uUt-sxWXd3AFsTWHsCc_Q&_nc_ohc=pvu0iKLAzp4Q7kNvwF2NKhk&_nc_oc=AdmXk33t-UcoJZK3vhPCbghdniZf6Nu1sU7k-05D5TxEX6sxZzN7OsrV0xsJCuJeMXE&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afkt2WbQFV-TiVjNxMK5VeZFdQXPoZ5_6tuKGGFNph7T4g&oe=693CAC92",
    "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/596428360_4435042800057300_662045437130383628_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGYAU5jz-Ac0oEG5YxgwCkw7nva11SRp7Hue9rXVJGnsbukMqQGcEaiDt2sKwySTKnyT8zxndcEXtXNSMFlFW_q&_nc_ohc=okjFjjNeXv8Q7kNvwFv6CDw&_nc_oc=AdkVIDQG-TkU81HKzPgM859yVVsgiYQvQyTtyeWb4-guTe6qMgUVI7X7Vj6MURQgQzs&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AflwYwiX9XZpLxP0Cu367QBzdCC23Esmke1zOR4wfDKG_Q&oe=693CB76D",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/596077837_4435042923390621_4339142508731509918_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFd8jNKvaPmkzUo-La0r05xyOBEPiYj-jHI4EQ-JiP6Mf_ACu-HZNQAHmXoTSAXEfvRJr3Z8cKPuzM1A0VxRegs&_nc_ohc=fijYh_l3PzIQ7kNvwEqN-Ju&_nc_oc=Adkb_JcRXOLmiGAgs8wWV7Ij3f7LZmX1ChKWRZt_S6nQ7IyLW5fw6Rmr8D34KQtkQWM&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfmyZDZhahBjanCjTDe0GgFVBVWuwfvez6Mm3Zlgds0seQ&oe=693CB46F",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/596245995_4435042926723954_6692848089840138817_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGRt_ZMMtvcOEMq4utuJFV1E0fM5qRVEfYTR8zmpFUR9hNu1EjLJ6ko0YHyWc3RLka98hSYkA1onMhxKZj8YsGQ&_nc_ohc=WVGo-gHBs4IQ7kNvwHYvIMD&_nc_oc=Adk5UjBd7ZMv06my22I-4T9m-nbus6AIK_KIGH8vW8LZ-SjR_3Cq0GLqDxy3a9vSPgw&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkfLs5mqRyGquSyA9GqImKiqyywBl8-sixydX6Yn8z4pg&oe=693CB49D",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596680533_4435042920057288_4620891683370642891_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEhJinh5cEs_WGSL4Qe72GkOsEcsM3okpk6wRywzeiSmROOOfZrl8ZwK5iuH8T2IyCL9XjrIXmpe6aks0JEtmIL&_nc_ohc=sKs_UrmUvf8Q7kNvwGgNXW8&_nc_oc=Adm-SVovlSm2hP3gMllvASDv5zdXXWTZqms5cQN0PoiCdebaj-pPUP85x5op2BuR1ng&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfnZDCq1S6by5Dd1F-BuBVRQy0Pv0rgs2xCsX6fsM3uG-Q&oe=693C9810",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/596421713_4435043016723945_923554195816684520_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeELXOXH4FYcHmZAf1M4qOFC7VVFXaeL_8TtVUVdp4v_xJu6wxSIDwS03biK93yIVi652pKE-zq_EOONFwvuBfJA&_nc_ohc=W3lzpGvfFAYQ7kNvwFwSDD6&_nc_oc=Adk60fSSpQj2iksq5ypJjMopbu1-zWRPJt63vxx0OObaxNVi8WItDpKBoOqdjSwLB_0&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AflIubS_hkfOnKKrFOTQc6hsqndnn-RTDI8FPykIwXjVQg&oe=693CB0E9",
    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/596494938_4435043046723942_7148727477687008893_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGc7YueWDa4KzDwaZ86zQEjNFzMVTjL2f00XMxVOMvZ_Ud5vLJ9Ah8GG-pqm9YAbbLfLsnqcin39NtT_sg5-PeB&_nc_ohc=NeIphFwmd40Q7kNvwGPZzAm&_nc_oc=Adlx4mBEvY_npJDBQMiA8Ylx1vAUa6_zlnhgrHJHrYR6vcd9q8rypMi_sA_kZRQzxsk&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkS28iJG74TENSoPmCI-JbAB-vJqsqDjG5XEkuAjG8zsg&oe=693CC1B3",
    "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/596331987_4435043086723938_7193242709113491199_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFP2TdcXByevSBLi_-DiKwLOC1xIfLXDGU4LXEh8tcMZay1K0ZRv1iZbimqS-iLi8NTjTLrXiSyImuo7n2lDums&_nc_ohc=Bma9aXKqnxcQ7kNvwHtFJyP&_nc_oc=AdkfHCh79-VPiuaUeiGOCQJ4u_HKWxC0JZ-4MfEeyMa6wLk4lb1TXM3PLkzLzl2Dx1M&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_AfkO-LI89_1y3lJGQNTBQvVTchfWW8iF7Gm_Kr4zTE8DLg&oe=693CBF20",
    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/597221541_4435043130057267_4437038561680136211_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEf-5UvsWMi1TvXAeGKnPuZwxWu-iJV2YnDFa76IlXZiRoB6ppjj5YwK_gKywoVGAbxxEjBmGDT_ATE0fEfn-fE&_nc_ohc=_bpyjdgWZ8QQ7kNvwEZTNZy&_nc_oc=AdkWiUIjL7vHgCuyWzaXoZP-rVeNxggM-lx9Zur5xXliyig7QV4vbrkK7UACKbFA_-I&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=VTDBEpZ7SfTTQ6-ktguFeg&oh=00_Afnx99b2jWZCL83kcLydhcPLTC9H5LLBTqn6xPU_wKd2Vw&oe=693C985B"
  ];
(function(){
  // Loading overlay helpers: keep the overlay visible until key images are ready.
  function hideLoadingOverlay(){
    const ov = document.getElementById('loading-overlay');
    if(!ov) return;
    ov.setAttribute('aria-hidden','true');
    // allow CSS opacity transition then remove from flow
    setTimeout(()=>{ try{ ov.style.display='none' }catch(e){} }, 420);
  }

  // Simple coordinator for multiple load tasks so the overlay only hides
  // when both document images and slideshow images are ready (or after timeout).
  const _loadingTasks = { documentImages: true, slideshow: true };
  function _markTaskDone(key){
    if(!_loadingTasks.hasOwnProperty(key)) return;
    _loadingTasks[key] = false;
    const allDone = Object.keys(_loadingTasks).every(k => _loadingTasks[k] === false);
    if(allDone) hideLoadingOverlay();
  }
  // Safety: ensure the overlay can't hang forever
  setTimeout(()=>{ hideLoadingOverlay(); }, 60000);

  // Wait for current document images to load (useful for modal/card images)
  function waitForDocumentImages(timeout = 60000){
    try{
      const imgs = Array.from(document.images || []);
      if(imgs.length === 0){ _markTaskDone('documentImages'); return; }

      // Use decode() when available to ensure the image is ready to be painted.
      const promises = imgs.map(img => {
        if(img.complete){ return Promise.resolve(); }
        return new Promise((res) => {
          img.addEventListener('load', res, {once:true});
          img.addEventListener('error', res, {once:true});
        });
      }).map(p => p.then(()=>{}));

      // Wait for loads then try decode for each element
      Promise.all(promises).then(()=>{
        const decodes = imgs.map(img => (img.decode ? img.decode().catch(()=>{}) : Promise.resolve()));
        return Promise.all(decodes);
      }).then(()=>{
        _markTaskDone('documentImages');
      }).catch(()=>{ _markTaskDone('documentImages'); });

      // safety fallback
      setTimeout(()=>{ _markTaskDone('documentImages'); }, timeout);
    }catch(e){ _markTaskDone('documentImages'); }
  }

  // start waiting for images right away; slideshow code will call hideLoadingOverlay()
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>waitForDocumentImages());
  } else {
    waitForDocumentImages();
  }
  // Prevent 'pull-to-refresh' / overscroll refresh on mobile browsers that
  // don't support `overscroll-behavior` (older iOS Safari). We only block
  // the downward pull when at the top of the page and a single touch is active.
  (function disablePullToRefresh(){
    let startY = 0;
    // Use passive:true for touchstart so it doesn't break scroll performance,
    // but we need passive:false for touchmove so we *can* call preventDefault.
    document.addEventListener('touchstart', function(e){
      if (e.touches && e.touches.length === 1) startY = e.touches[0].clientY;
    }, {passive: true});

    document.addEventListener('touchmove', function(e){
      if (!(e.touches && e.touches.length === 1)) return;
      const currentY = e.touches[0].clientY;
      const isPullingDown = currentY > startY;
      const isAtTop = window.pageYOffset === 0;

      // If we're at the very top of the page and the user is pulling down,
      // block the gesture so the browser won't trigger pull-to-refresh.
      if (isAtTop && isPullingDown) {
        e.preventDefault();
      }

      startY = currentY;
    }, {passive: false});
  })();
  const MAX=23; // try images 1..12
  const slidesEl=document.getElementById('slides');
  const slides=[];
  let index=0;
  // load names & optional title from global config (js/config.js)
  try{
    const namesEl = document.getElementById('names');
    const titleEl = document.querySelector('.propose');
    const cfg = window.PROPOSAL || {};
    if(namesEl){
      const n1 = cfg.name1 || '[Name]';
      const n2 = cfg.name2 || '[Name]';
      namesEl.textContent = `${n1} ❤️ ${n2}`;
    }
    if(titleEl && cfg.title){ titleEl.textContent = cfg.title; }
  }catch(e){/* ignore if config missing */}
  // try loading a sequence of images named 1.jpg..MAX.jpg (jpg/png supported)
  function tryLoad(i){
    return new Promise((res)=>{
      const img=new Image();
      img.onload=()=>res({ok:true,el:img});
      img.onerror=()=>res({ok:false});
      // prefer jpg then png fallback
      img.src=`img/${i}.png`;
    });
  }

  (async function(){
    // Prefer a pre-generated images.json listing all files in img/
    let fileList = imgList;
    // Helper to load by filename
    const loadByName = (name) => new Promise((res) => {
      const img = new Image();
      img.onload = () => res({ok:true, el: img});
      img.onerror = () => res({ok:false});
      img.src = name;
    });

    
    if(fileList){
      for(const fname of fileList){
        const r = await loadByName(fname);
        if(r.ok){
          r.el.alt = `Couple ${fname}`;
          // prevent default browser dragging which can interfere with swipe gestures
          r.el.draggable = false;
          r.el.setAttribute('draggable','false');
          r.el.style.userSelect = 'none';
          slides.push(r.el);
        }
      }
    } else {
      // Fallback: try numeric names as before
      for(let i=1;i<=MAX;i++){
        // try jpg then png
        let r= tryLoad(i);
        if(!r.ok){
          // try png
          r=new Promise((res)=>{
            const img=new Image();
            img.onload=()=>res({ok:true,el:img});
            img.onerror=()=>res({ok:false});
            img.src=`img/${i}.png`;
          });
          r=await r;
        }
        if(r.ok){
          r.el.alt=`Couple ${i}`;
          // prevent default browser dragging which can interfere with swipe gestures
          r.el.draggable = false;
          r.el.setAttribute('draggable','false');
          r.el.style.userSelect = 'none';
          slides.push(r.el);
        }
      }
    }

    if(slides.length===0){
      // fallback placeholder
      const p=document.createElement('div');
      p.style.padding='40px';
      p.style.color='#99a0b0';
      p.style.textAlign='center';
      p.innerText='No images found in img/.\nPlace image files in the img/ folder and optionally run the provided helper to generate images.json.';
      slidesEl.appendChild(p);
      return;
    }

    for(const s of slides){
      const wrapper=document.createElement('div');
      wrapper.className='slide';
      wrapper.appendChild(s);
      slidesEl.appendChild(wrapper);
    }
    // Wait for slideshow images to be decoded/ready before marking slideshow task done.
    update();
    startAutoplay();
    try{
      const decodes = slides.map(img => (img.decode ? img.decode().catch(()=>{}) : Promise.resolve()));
      await Promise.all(decodes);
    }catch(e){}
    _markTaskDone('slideshow');
  })();

  function update(){
    // measure the visible slideshow width (the parent container), not the total slides width
    const container = slidesEl.closest('.slideshow') || document.getElementById('slideshow');
    const w = container ? container.clientWidth : slidesEl.clientWidth;
    slidesEl.style.transform = `translateX(${-index * w}px)`;
  }
  window.addEventListener('resize',()=>requestAnimationFrame(update));

  // navigation helpers (use these everywhere so we can remove the next button)
  function prevSlide(){ index = (index - 1 + slides.length) % slides.length; update(); }
  function nextSlide(){ index = (index + 1) % slides.length; update(); }

  // wire up prev button if present, remove the visual "next" button (right arrow)
  const prevBtnEl = document.getElementById('prev');
  const nextBtnEl = document.getElementById('next');
  if(prevBtnEl) prevBtnEl.addEventListener('click', prevSlide);
  // remove the next arrow from the DOM so it's not visible or focusable
  if(nextBtnEl && nextBtnEl.parentNode) nextBtnEl.parentNode.removeChild(nextBtnEl);

  // autoplay
  let timer=null;
  function startAutoplay(){
    stopAutoplay();
    timer=setInterval(()=>{index=(index+1)%slides.length;update();},4000);
  }
  function stopAutoplay(){if(timer)clearInterval(timer);timer=null}
  slidesEl.addEventListener('mouseenter',stopAutoplay);
  slidesEl.addEventListener('mouseleave',startAutoplay);

  // Horizontal swipe on slideshow to navigate slides (touch + pointer fallback)
  (function(){
    if(!slidesEl) return;
    let startX = null, startY = null, tracking = false;
    const THRESHOLD = 50; // px horizontal movement

    let fired = false;
    slidesEl.addEventListener('touchstart', function(e){
      if(!e.touches || !e.touches.length) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
      fired = false;
    }, {passive:true});

    slidesEl.addEventListener('touchmove', function(e){
      if(!tracking || fired) return;
      const t = (e.touches && e.touches[0]) ? e.touches[0] : null;
      if(!t) return;
      const dx = startX - t.clientX;
      const dy = startY - t.clientY;
      // ignore mostly-vertical movement
      if(Math.abs(dx) < Math.abs(dy)) return;
      if(Math.abs(dx) > THRESHOLD){
        fired = true;
        if(dx > 0) nextSlide(); else prevSlide();
      }
    }, {passive:true});

    slidesEl.addEventListener('touchend', function(e){
      tracking = false;
      startX = startY = null;
      fired = false;
    }, {passive:true});

    // pointer events for mouse drag support
    let pointerDown = false;
    slidesEl.addEventListener('pointerdown', function(e){
      pointerDown = true; startX = e.clientX; startY = e.clientY; fired = false;
      slidesEl.setPointerCapture && slidesEl.setPointerCapture(e.pointerId);
    });
    slidesEl.addEventListener('pointermove', function(e){
      if(!pointerDown || fired) return;
      const dx = startX - e.clientX; const dy = startY - e.clientY;
      if(Math.abs(dx) < Math.abs(dy)) return;
      if(Math.abs(dx) > THRESHOLD){ fired = true; if(dx > 0) nextSlide(); else prevSlide(); }
    });
    slidesEl.addEventListener('pointerup', function(e){
      pointerDown = false; startX = startY = null; fired = false;
    });
    slidesEl.addEventListener('pointercancel', ()=>{ pointerDown=false; startX=startY=null; fired=false; });
  })();

  // modal actions (robust show/hide, prevent accidental hide)
  const modal=document.getElementById('modal');
  const yesBtn=document.getElementById('yesBtn');
  const closeBtn=document.getElementById('closeModal');

  function showModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    modal.classList.add('open');
  }
  function hideModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
    modal.classList.remove('open');
  }

  if(yesBtn){
    yesBtn.addEventListener('click',(e)=>{e.preventDefault(); e.stopPropagation(); showModal();});
  }
  if(closeBtn){
    closeBtn.addEventListener('click',(e)=>{e.preventDefault(); e.stopPropagation(); hideModal();});
  }

  // clicking on the overlay (outside modal-content) closes the modal
  if(modal){
    modal.addEventListener('click',(e)=>{
      if(e.target === modal){ hideModal(); }
    });
  }

  // robust keyboard support: handle ArrowLeft/ArrowRight and legacy keyCode
  window.addEventListener('keydown', (e) => {
    // ignore when typing in inputs, textareas or contenteditable areas
    const tgt = e.target;
    const isTyping = tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.isContentEditable);
    if (isTyping) return;

    const key = e.key || e.code || e.keyCode;
    // support modern names and legacy keyCode numbers
    if (key === 'ArrowLeft' || key === 'Left' || key === 37) {
      e.preventDefault();
      prevSlide();
    }
    if (key === 'ArrowRight' || key === 'Right' || key === 39) {
      e.preventDefault();
      nextSlide();
    }
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      e.preventDefault();
      if (modal) modal.setAttribute('aria-hidden','true');
    }
  });

  // images are loaded by the IIFE above; no named `loadImages` call required

    // Reveal proposal card when user scrolls to bottom of the page
    (function(){
      const card = document.getElementById('proposalCard');
      if(!card) return;
      let revealed = false;
      const THRESHOLD = 40; // px from bottom

      function isAtBottom(){
        const scrollY = window.scrollY || window.pageYOffset;
        const viewport = window.innerHeight || document.documentElement.clientHeight;
        const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        return (scrollY + viewport) >= (docHeight - THRESHOLD);
      }

      function checkAndReveal(){
        if(revealed) return;
        if(isAtBottom()){
          revealed = true;
          card.classList.remove('reveal-hidden');
          card.classList.add('reveal-visible');
          // optional: focus the Yes button for accessibility
          const yes = document.getElementById('yesBtn');
          if(yes) yes.setAttribute('autofocus','true');
        }
      }

      // If the page is short and already at bottom, reveal immediately
      document.addEventListener('DOMContentLoaded', checkAndReveal);
      window.addEventListener('load', checkAndReveal);
      window.addEventListener('scroll', checkAndReveal, {passive:true});
      window.addEventListener('resize', checkAndReveal);
      // run once now in case DOMContentLoaded already fired
      checkAndReveal();
    })();

    // Mobile swipe-up / swipe-down handler to show/hide the right panel
    function initMobileSwipeToggle(){
      const RIGHT_BREAKPOINT = 900; // matches the CSS media query
      const right = document.querySelector('.right');
      const left = document.querySelector('.left');
      if(!right || !left) return;

      // start collapsed on small screens
      function setInitial(){
        if(window.matchMedia(`(max-width:${RIGHT_BREAKPOINT}px)`).matches){
          right.classList.remove('revealed');
          // ensure collapsed state (CSS handles collapsed style by absence of .revealed)
        } else {
          // on larger screens always show it
          right.classList.add('revealed');
        }
      }

      let startY = null;
      let tracking = false;
      const THRESHOLD = 60; // pixels to consider a swipe

      // touch start on left area (swiping up anywhere on left should reveal)
      left.addEventListener('touchstart', function(e){
        if(e.touches && e.touches.length) startY = e.touches[0].clientY;
        tracking = true;
      }, {passive:true});

      left.addEventListener('touchmove', function(e){
        // optional: could implement a visual follow, but keep simple
      }, {passive:true});

      left.addEventListener('touchend', function(e){
        if(!tracking || startY === null) return;
        const endY = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : null;
        tracking = false;
        if(endY === null) { startY = null; return; }
        const delta = startY - endY;
        // swipe up -> reveal
        if(delta > THRESHOLD){
          right.classList.add('revealed');
        }
        // swipe down on left (when panel visible) -> hide
        if(delta < -THRESHOLD){
          right.classList.remove('revealed');
        }
        startY = null;
      }, {passive:true});

      // also listen for swipe down on the right panel to collapse
      right.addEventListener('touchstart', function(e){
        if(e.touches && e.touches.length) startY = e.touches[0].clientY;
        tracking = true;
      }, {passive:true});
      right.addEventListener('touchend', function(e){
        if(!tracking || startY === null) return;
        const endY = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : null;
        tracking = false;
        if(endY === null) { startY = null; return; }
        const delta = startY - endY;
        // swipe down (delta negative) collapses
        if(delta < -THRESHOLD){
          right.classList.remove('revealed');
        }
        startY = null;
      }, {passive:true});

      // also support a two-finger or two-tap fallback: tapping a small hint could reveal —
      // for simplicity, allow clicking on left to reveal if collapsed
      left.addEventListener('click', function(){
        if(window.matchMedia(`(max-width:${RIGHT_BREAKPOINT}px)`).matches){
          if(!right.classList.contains('revealed')) right.classList.add('revealed');
        }
      });

      // keep initial state in sync on resize
      window.addEventListener('resize', setInitial);
      // init now
      setInitial();
    }

    // initialize swipe behaviors after content is ready
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', initMobileSwipeToggle);
    } else {
      initMobileSwipeToggle();
    }
})();