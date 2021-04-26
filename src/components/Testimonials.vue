<template >
    <div class="textItem" id="testimonial-section" v-show="show === id" :class="{fadeIn: show === id}">
        <p class="testimonial">
            "We invited Carlos to speak about HR and recruiting trends in startups for our entrepreneurship class. Our students were a mix of small business and startup owners, average age 40, and they voted the class as the best one in the semester. I recommend Carlos both because of his speaking skills and his understanding of professional networks and relationships." 
        </p>
        <p class="testimonial-giver">
            Michel Mosse, former Operations Manager at UBER    
        </p>
        <br>
        <p class="testimonial">
            "I love meeting people like Carlos, that know so well what they want to do and why they want to do it... and share it with others! A relentless entrepreneur, simple and focused, with the charm and attitude required to inspire others."
        </p>
        <p class="testimonial-giver">
            Alba Romero, Director of Talent and Culture at Diverza 
        </p>
        <br>
        <p class="testimonial">
            "Carlos is a truly inspirational speaker, and has a command of presence and business insights that makes it high-level enough for the more savvy person yet understandable for the new startup owner. His presence charmed our audience and engaged them even more to listen and want to learn from. I know that many people rated him as one of the highlights of our event – myself included."
        </p>
        <p class="testimonial-giver">
            Tarek El Kady, World Economic Forum Founding Curator 
        </p>
        <br>
        <p class="testimonial">
            "Carlos is a keen, conceptual thinker who is able of communicating his ideas clearly. His insights would be valuable to many people, particularly those who value his views on education and how to foster their own independence in the changing world of work. He is also a good listener which is one of the reasons he understands the world and the human condition."
        </p>
        <p class="testimonial-giver">
            John Sydney Hopkins, Financial Forecasting Consultant &amp; Advisor 
        </p>
        <br>
        <p class="testimonial">
            "With his expertise in learning and business, Carlos helped me with invaluable advice to improve my efficiency and productivity leading me to finally start a business. He also proved to be a natural born connector, captivating people with ease and helping them build deep meaningful relationships."
        </p>
        <p class="testimonial-giver">
            Alexandre Wiechers Vaz, Software Engineer at Gupy
        </p>
        <br>
        <p class="testimonial">
            "Carlos proved to be an inspirational speaker and his talk was acclaimed by the audience of the first conference of Digital Nomads at Buenos Aires. What impressed me most was his humility, willingness to share his knowledge and his talk with very good advice. You can count on Carlos to be a great speaker and his experience it's really amazing."
        </p>
        <p class="testimonial-giver">
            Nicolás Germen, Mobile &amp; Web Architecture
        </p>
        <br>
        <p class="testimonial">
            "I saw Carlos present in at NYU, he is a very captivating speaker. His topics were very relevant and the advice he gave was spot on. He was able to give some very useful tips on networking, priming yourself to find the right opportunities for your business and developing your brand. I took a lot of notes which I'm looking forward to applying to my career."
        </p>
        <p class="testimonial-giver">
            Helen W., Senior In-House Lawyer at Top Financial Institution
        </p>
        <br>
        <p class="testimonial">
            "I had the pleasure of hearing Carlos speak both in Stanford University and San Francisco University as part of the GiveGetWin Gotta be Good tour. He is an outstanding speaker, with an impressive ability to synthesize his ideas on simple and engaging talks. He has a great passion and ability to coach and mentor people, with a great deal of integrity and humility, which I consider admirable."
        </p>
        <p class="testimonial-giver">
            Tomas Abadi, Data Scientist
        </p>
        <br>
        <p class="testimonial">
            "Carlos is one of the most impressive professionals I have ever known. I've seen him grow at an exponential rate due to his boundless curiosity, willingness to take on new challenges, and dedication to excellence. Not only does he possess exemplary technical skills in areas such as marketing, sales, communication, and strategy, but he also maintains a strict commitment to integrity and his own personal values. We have worked together on various projects and each time has been an absolute pleasure. With abilities such as keeping a clear vision in mind while executing, discipline, empathy, clear communication, and a calm disposition in stressful situations, Carlos is an exemplary leader in anything he takes on.
        </p>
        <p class="testimonial-giver">
            Florencia Di Sarli, Project Manager at Monster Energy
        </p>
        <br>
        <p class="testimonial">
            "Carlos was a huge part of taking Exosphere from an idea and growing it into a reality. His expansive global network and personal hustle have opened the doors for countless conversations and moments of shared vision. If Carlos isn't currently a part of your world, he should be."
        </p>
        <p class="testimonial-giver">
            Andy Ellwood, Cofounder and President of Basket
        </p>
        <br>
        <p class="testimonial">
            "I can comfortably say that three months of mentorship from Carlos changed my life. He sees problems with a crisp, clear mind and shares ideas in a way that's brilliant in its simplicity. Every time I'd hit a wall, I'd walk away from a quick meeting with a completely new take on things. It's almost magic. I feel super lucky to have had the opportunity to learn and work with him."
        </p>
        <p class="testimonial-giver">
            Zach Obront, Co-Founder at Scribe Media
        </p>
        <br>
        <p class="testimonial">
            "Carlos is an outstanding big thinker - and doer. He combines a strategic and visionary mindset with excellent execution and orchestration skills, making powerful things happen. I also greatly respect and admire his passion for coaching and helping others, showing his high level of personal quality and integrity."
        </p>
        <p class="testimonial-giver">
            Matías Rivera Larrain, Founder &amp; CEO of Fanatiz
        </p>
    </div>
</template>



<script>
export default {
    name: "Testimonials",
    props: ["id", "show"]
}
</script>

<style scoped>

#testimonial-section {
    margin-top: 10px;
    align-self: flex-start;
}

.testimonial {
    font-size: 13px;
    line-height: 20px;
    font-style: italic;
    margin-bottom: 5px;
}

.testimonial-giver {
    color:rgb(53, 53, 53);
    font-weight: bold;
    margin-bottom: 10px;
}

</style>
