/* ==================================================
   TASKLY
   Aplicación de productividad
================================================== */


/* ==================================================
   ELEMENTOS
================================================== */

const sidebar =
    document.getElementById("sidebar");

const openSidebar =
    document.getElementById("openSidebar");

const closeSidebar =
    document.getElementById("closeSidebar");

const overlay =
    document.getElementById("overlay");

const navItems =
    document.querySelectorAll(".nav-item");

const pageSections =
    document.querySelectorAll(".page-section");

const pageTitle =
    document.getElementById("pageTitle");

const topbarDate =
    document.getElementById("topbarDate");


/* ==================================================
   PERFIL
================================================== */

const miniProfile =
    document.getElementById("miniProfile");

const topbarProfile =
    document.getElementById("topbarProfile");

const sidebarName =
    document.getElementById("sidebarName");

const sidebarUsername =
    document.getElementById("sidebarUsername");

const sidebarAvatar =
    document.getElementById("sidebarAvatar");

const topbarAvatar =
    document.getElementById("topbarAvatar");

const welcomeName =
    document.getElementById("welcomeName");

const profileAvatar =
    document.getElementById("profileAvatar");

const profileName =
    document.getElementById("profileName");

const profileUsername =
    document.getElementById("profileUsername");

const profileBio =
    document.getElementById("profileBio");


/* ==================================================
   BOTONES PERFIL
================================================== */

const editProfileButton =
    document.getElementById("editProfileButton");

const avatarEditButton =
    document.getElementById("avatarEditButton");

const profileModal =
    document.getElementById("profileModal");

const closeProfileModal =
    document.getElementById("closeProfileModal");

const cancelProfile =
    document.getElementById("cancelProfile");

const profileForm =
    document.getElementById("profileForm");

const profileNameInput =
    document.getElementById("profileNameInput");

const profileUsernameInput =
    document.getElementById(
        "profileUsernameInput"
    );

const profileBioInput =
    document.getElementById(
        "profileBioInput"
    );

const editorAvatar =
    document.getElementById("editorAvatar");

const randomAvatarButton =
    document.getElementById(
        "randomAvatarButton"
    );


/* ==================================================
   TAREAS
================================================== */

const taskList =
    document.getElementById("taskList");

const allTaskList =
    document.getElementById(
        "allTaskList"
    );

const todayTaskList =
    document.getElementById(
        "todayTaskList"
    );

const importantTaskList =
    document.getElementById(
        "importantTaskList"
    );


const totalTasks =
    document.getElementById(
        "totalTasks"
    );

const completedTasks =
    document.getElementById(
        "completedTasks"
    );

const pendingTasks =
    document.getElementById(
        "pendingTasks"
    );

const importantTasks =
    document.getElementById(
        "importantTasks"
    );

const navTaskCount =
    document.getElementById(
        "navTaskCount"
    );


/* ==================================================
   MODAL TAREAS
================================================== */

const taskModal =
    document.getElementById(
        "taskModal"
    );

const newTaskButton =
    document.getElementById(
        "newTaskButton"
    );

const newTaskButton2 =
    document.getElementById(
        "newTaskButton2"
    );

const closeTaskModal =
    document.getElementById(
        "closeTaskModal"
    );

const cancelTask =
    document.getElementById(
        "cancelTask"
    );

const taskForm =
    document.getElementById(
        "taskForm"
    );

const taskTitle =
    document.getElementById(
        "taskTitle"
    );

const taskDate =
    document.getElementById(
        "taskDate"
    );

const taskPriority =
    document.getElementById(
        "taskPriority"
    );

const taskCategory =
    document.getElementById(
        "taskCategory"
    );

const taskDescription =
    document.getElementById(
        "taskDescription"
    );


/* ==================================================
   FILTROS
================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const sortTasks =
    document.getElementById(
        "sortTasks"
    );

let currentFilter =
    "all";


/* ==================================================
   ESTADÍSTICAS
================================================== */

const progressPercentage =
    document.getElementById(
        "progressPercentage"
    );

const progressCircle =
    document.getElementById(
        "progressCircle"
    );

const progressCircleText =
    document.getElementById(
        "progressCircleText"
    );

const progressCompleted =
    document.getElementById(
        "progressCompleted"
    );

const progressPending =
    document.getElementById(
        "progressPending"
    );

const streakNumber =
    document.getElementById(
        "streakNumber"
    );

const streakProgress =
    document.getElementById(
        "streakProgress"
    );

const productivityText =
    document.getElementById(
        "productivityText"
    );


/* ==================================================
   ESTADÍSTICAS DETALLADAS
================================================== */

const statsTotal =
    document.getElementById(
        "statsTotal"
    );

const statsCompleted =
    document.getElementById(
        "statsCompleted"
    );

const statsPending =
    document.getElementById(
        "statsPending"
    );

const statsRate =
    document.getElementById(
        "statsRate"
    );

const completedBar =
    document.getElementById(
        "completedBar"
    );

const pendingBar =
    document.getElementById(
        "pendingBar"
    );

const importantBar =
    document.getElementById(
        "importantBar"
    );


/* ==================================================
   LOGROS
================================================== */

const achievementFirst =
    document.getElementById(
        "achievementFirst"
    );

const achievementFive =
    document.getElementById(
        "achievementFive"
    );

const achievementTen =
    document.getElementById(
        "achievementTen"
    );


/* ==================================================
   PERFIL - ESTADÍSTICAS
================================================== */

const profileTaskCount =
    document.getElementById(
        "profileTaskCount"
    );

const profileCompletedCount =
    document.getElementById(
        "profileCompletedCount"
    );

const profileStreak =
    document.getElementById(
        "profileStreak"
    );


/* ==================================================
   CONFIGURACIÓN
================================================== */

const darkMode =
    document.getElementById(
        "darkMode"
    );

const notificationsEnabled =
    document.getElementById(
        "notificationsEnabled"
    );

const animationsEnabled =
    document.getElementById(
        "animationsEnabled"
    );

const colorOptions =
    document.querySelectorAll(
        ".color-option"
    );

const exportDataButton =
    document.getElementById(
        "exportDataButton"
    );

const resetSettingsButton =
    document.getElementById(
        "resetSettingsButton"
    );

const deleteAllDataButton =
    document.getElementById(
        "deleteAllDataButton"
    );


/* ==================================================
   CATEGORÍAS
================================================== */

const categoriesGrid =
    document.getElementById(
        "categoriesGrid"
    );

const newCategoryButton =
    document.getElementById(
        "newCategoryButton"
    );

const categoryModal =
    document.getElementById(
        "categoryModal"
    );

const closeCategoryModal =
    document.getElementById(
        "closeCategoryModal"
    );

const cancelCategory =
    document.getElementById(
        "cancelCategory"
    );

const categoryForm =
    document.getElementById(
        "categoryForm"
    );

const categoryName =
    document.getElementById(
        "categoryName"
    );


/* ==================================================
   BÚSQUEDA
================================================== */

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchPanel =
    document.getElementById(
        "searchPanel"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const closeSearch =
    document.getElementById(
        "closeSearch"
    );


/* ==================================================
   NOTIFICACIONES
================================================== */

const notificationButton =
    document.getElementById(
        "notificationButton"
    );

const notificationDot =
    document.getElementById(
        "notificationDot"
    );

const notificationsPanel =
    document.getElementById(
        "notificationsPanel"
    );

const closeNotifications =
    document.getElementById(
        "closeNotifications"
    );

const notificationsList =
    document.getElementById(
        "notificationsList"
    );


/* ==================================================
   TOAST
================================================== */

const toast =
    document.getElementById(
        "toast"
    );

const toastTitle =
    document.getElementById(
        "toastTitle"
    );

const toastMessage =
    document.getElementById(
        "toastMessage"
    );

let toastTimer;


/* ==================================================
   DATOS POR DEFECTO
================================================== */

const defaultProfile = {

    name: "Alex",

    username: "@alex",

    bio:
        "Organizando mis ideas y construyendo mis objetivos.",

    avatar: "A"

};


const defaultSettings = {

    darkMode: false,

    notifications: true,

    animations: true,

    color: "#6366f1"

};


const defaultCategories = [

    {
        id: "personal",
        name: "Personal",
        icon: "fa-user",
        color: "#6366f1"
    },

    {
        id: "estudio",
        name: "Estudio",
        icon: "fa-book",
        color: "#3b82f6"
    },

    {
        id: "trabajo",
        name: "Trabajo",
        icon: "fa-briefcase",
        color: "#f59e0b"
    },

    {
        id: "proyecto",
        name: "Proyecto",
        icon: "fa-code",
        color: "#8b5cf6"
    }

];


/* ==================================================
   CARGAR DATOS
================================================== */

let profile =
    JSON.parse(
        localStorage.getItem(
            "tasklyProfile"
        )
    ) || {
        ...defaultProfile
    };


let settings =
    JSON.parse(
        localStorage.getItem(
            "tasklySettings"
        )
    ) || {
        ...defaultSettings
    };


let categories =
    JSON.parse(
        localStorage.getItem(
            "tasklyCategories"
        )
    ) || [
        ...defaultCategories
    ];


let tasks =
    JSON.parse(
        localStorage.getItem(
            "tasklyTasks"
        )
    ) || [];


let notifications =
    JSON.parse(
        localStorage.getItem(
            "tasklyNotifications"
        )
    ) || [];


/* ==================================================
   GUARDAR DATOS
================================================== */

function saveTasks() {

    localStorage.setItem(
        "tasklyTasks",
        JSON.stringify(tasks)
    );

}


function saveProfile() {

    localStorage.setItem(
        "tasklyProfile",
        JSON.stringify(profile)
    );

}


function saveSettings() {

    localStorage.setItem(
        "tasklySettings",
        JSON.stringify(settings)
    );

}


function saveCategories() {

    localStorage.setItem(
        "tasklyCategories",
        JSON.stringify(categories)
    );

}


function saveNotifications() {

    localStorage.setItem(
        "tasklyNotifications",
        JSON.stringify(notifications)
    );

}


/* ==================================================
   FECHA
================================================== */

function getTodayString() {

    const date =
        new Date();

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );

    return `${year}-${month}-${day}`;

}


function setDate() {

    const date =
        new Date();

    topbarDate.textContent =
        date.toLocaleDateString(
            "es-ES",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );

}


function formatDate(dateString) {

    if (!dateString) {

        return "";

    }

    const date =
        new Date(
            `${dateString}T00:00:00`
        );

    return date.toLocaleDateString(
        "es-ES",
        {
            day: "numeric",
            month: "short"
        }
    );

}


/* ==================================================
   SIDEBAR
================================================== */

function openMenu() {

    sidebar.classList.add(
        "active"
    );

    overlay.classList.add(
        "active"
    );

}


function closeMenu() {

    sidebar.classList.remove(
        "active"
    );

    overlay.classList.remove(
        "active"
    );

}


openSidebar.addEventListener(
    "click",
    openMenu
);


closeSidebar.addEventListener(
    "click",
    closeMenu
);


overlay.addEventListener(
    "click",
    function() {

        closeMenu();

        closeAllPanels();

    }
);


/* ==================================================
   NAVEGACIÓN
================================================== */

const sectionTitles = {

    inicio: "Mi día",

    tareas: "Mis tareas",

    hoy: "Hoy",

    importantes: "Importantes",

    estadisticas: "Estadísticas",

    categorias: "Categorías",

    perfil: "Mi perfil",

    configuracion: "Configuración"

};


function showSection(
    section
) {

    pageSections.forEach(
        function(page) {

            page.classList.remove(
                "active"
            );

        }
    );


    const selectedSection =
        document.getElementById(
            `section-${section}`
        );


    if (selectedSection) {

        selectedSection.classList.add(
            "active"
        );

    }


    navItems.forEach(
        function(item) {

            item.classList.remove(
                "active"
            );


            if (
                item.dataset.section ===
                section
            ) {

                item.classList.add(
                    "active"
                );

            }

        }
    );


    pageTitle.textContent =
        sectionTitles[section];


    closeMenu();

    closeAllPanels();

    renderAll();

}


navItems.forEach(
    function(item) {

        item.addEventListener(
            "click",
            function() {

                showSection(
                    item.dataset.section
                );

            }
        );

    }
);


document
    .querySelectorAll(
        "[data-section]"
    )
    .forEach(
        function(button) {

            if (
                button.classList.contains(
                    "nav-item"
                )
            ) {

                return;

            }


            button.addEventListener(
                "click",
                function() {

                    showSection(
                        button.dataset.section
                    );

                }
            );

        }
    );


/* ==================================================
   MODALES
================================================== */

function openModal(
    modal
) {

    modal.classList.add(
        "active"
    );

}


function closeModal(
    modal
) {

    modal.classList.remove(
        "active"
    );

}


function closeAllModals() {

    document
        .querySelectorAll(
            ".modal"
        )
        .forEach(
            function(modal) {

                modal.classList.remove(
                    "active"
                );

            }
        );

}


function openTaskModal() {

    setDefaultTaskDate();

    taskForm.reset();

    setDefaultTaskDate();

    openModal(
        taskModal
    );

    setTimeout(
        function() {

            taskTitle.focus();

        },
        100
    );

}


newTaskButton.addEventListener(
    "click",
    openTaskModal
);


newTaskButton2.addEventListener(
    "click",
    openTaskModal
);


closeTaskModal.addEventListener(
    "click",
    function() {

        closeModal(
            taskModal
        );

    }
);


cancelTask.addEventListener(
    "click",
    function() {

        closeModal(
            taskModal
        );

    }
);


/* ==================================================
   FECHA DEFAULT DE TAREA
================================================== */

function setDefaultTaskDate() {

    taskDate.value =
        getTodayString();

}


/* ==================================================
   CREAR TAREA
================================================== */

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const title =
            taskTitle.value.trim();


        if (!title) {

            return;

        }


        const task = {

            id:
                Date.now(),

            title:
                title,

            date:
                taskDate.value,

            priority:
                taskPriority.value,

            category:
                taskCategory.value,

            description:
                taskDescription.value.trim(),

            completed:
                false,

            createdAt:
                new Date().toISOString()

        };


        tasks.unshift(
            task
        );


        saveTasks();

        addNotification(
            "Nueva tarea",
            `Creaste "${title}".`,
            "fa-plus"
        );


        closeModal(
            taskModal
        );


        renderAll();

        showToast(
            "Tarea creada",
            "La tarea fue añadida correctamente."
        );

    }
);


/* ==================================================
   CREAR HTML DE TAREA
================================================== */

function createTaskElement(
    task
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "task";


    if (task.completed) {

        element.classList.add(
            "completed"
        );

    }


    const category =
        categories.find(
            function(item) {

                return (
                    item.id ===
                    task.category
                );

            }
        );


    const categoryName =
        category
            ? category.name
            : "General";


    element.innerHTML = `

        <button
            class="task-checkbox"
            data-action="complete"
            data-id="${task.id}"
            title="Completar tarea"
        >

            ${
                task.completed
                    ? '<i class="fa-solid fa-check"></i>'
                    : ""
            }

        </button>


        <div class="task-info">

            <div class="task-title">
                ${escapeHTML(task.title)}
            </div>


            ${
                task.description
                    ? `
                        <div class="task-description">
                            ${escapeHTML(
                                task.description
                            )}
                        </div>
                    `
                    : ""
            }


            <div class="task-meta">

                <span class="task-date">

                    <i class="fa-regular fa-calendar"></i>

                    ${formatDate(task.date)}

                </span>


                <span class="task-category">

                    ${escapeHTML(categoryName)}

                </span>

            </div>

        </div>


        ${
            task.priority === "important"
                ? `
                    <span class="task-priority">
                        IMPORTANTE
                    </span>
                `
                : ""
        }


        <div class="task-actions">

            <button
                class="task-action"
                data-action="toggle-priority"
                data-id="${task.id}"
                title="Cambiar prioridad"
            >

                ${
                    task.priority === "important"
                        ? '<i class="fa-solid fa-star"></i>'
                        : '<i class="fa-regular fa-star"></i>'
                }

            </button>


            <button
                class="task-action delete"
                data-action="delete"
                data-id="${task.id}"
                title="Eliminar tarea"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

    `;


    return element;

}


/* ==================================================
   RENDERIZAR LISTA
================================================== */

function renderTaskList(
    container,
    taskArray
) {

    container.innerHTML = "";


    if (
        taskArray.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">

                    <i class="fa-solid fa-check"></i>

                </div>


                <h3>
                    Todo está tranquilo
                </h3>


                <p>
                    No hay tareas para mostrar
                    en esta sección.
                </p>

            </div>

        `;

        return;

    }


    taskArray.forEach(
        function(task) {

            container.appendChild(
                createTaskElement(task)
            );

        }
    );

}


/* ==================================================
   FILTRAR Y ORDENAR
================================================== */

function getFilteredTasks() {

    let result =
        [...tasks];


    if (
        currentFilter ===
        "pending"
    ) {

        result =
            result.filter(
                function(task) {

                    return !task.completed;

                }
            );

    }


    if (
        currentFilter ===
        "completed"
    ) {

        result =
            result.filter(
                function(task) {

                    return task.completed;

                }
            );

    }


    const sort =
        sortTasks.value;


    if (
        sort ===
        "newest"
    ) {

        result.sort(
            function(a, b) {

                return (
                    b.id -
                    a.id
                );

            }
        );

    }


    if (
        sort ===
        "oldest"
    ) {

        result.sort(
            function(a, b) {

                return (
                    a.id -
                    b.id
                );

            }
        );

    }


    if (
        sort ===
        "priority"
    ) {

        result.sort(
            function(a, b) {

                if (
                    a.priority ===
                    b.priority
                ) {

                    return 0;

                }

                return (
                    a.priority ===
                    "important"
                        ? -1
                        : 1
                );

            }
        );

    }


    if (
        sort ===
        "date"
    ) {

        result.sort(
            function(a, b) {

                return (
                    new Date(a.date) -
                    new Date(b.date)
                );

            }
        );

    }


    return result;

}


function renderTasks() {

    const today =
        getTodayString();


    const todayTasks =
        tasks.filter(
            function(task) {

                return (
                    task.date ===
                    today
                );

            }
        );


    const important =
        tasks.filter(
            function(task) {

                return (
                    task.priority ===
                    "important"
                );

            }
        );


    const filtered =
        getFilteredTasks();


    renderTaskList(
        taskList,
        tasks.slice(0, 5)
    );


    renderTaskList(
        allTaskList,
        filtered
    );


    renderTaskList(
        todayTaskList,
        todayTasks
    );


    renderTaskList(
        importantTaskList,
        important
    );

}


/* ==================================================
   ACCIONES DE TAREAS
================================================== */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "[data-action]"
            );


        if (!button) {

            return;

        }


        const action =
            button.dataset.action;


        const id =
            Number(
                button.dataset.id
            );


        const task =
            tasks.find(
                function(item) {

                    return (
                        item.id ===
                        id
                    );

                }
            );


        if (!task) {

            return;

        }


        if (
            action ===
            "complete"
        ) {

            task.completed =
                !task.completed;


            if (
                task.completed
            ) {

                addNotification(
                    "Tarea completada",
                    `"${task.title}" está lista.`,
                    "fa-check"
                );


                showToast(
                    "¡Completada!",
                    "Has terminado una tarea."
                );

            }

        }


        if (
            action ===
            "toggle-priority"
        ) {

            task.priority =
                task.priority ===
                "important"
                    ? "normal"
                    : "important";


            showToast(
                "Prioridad actualizada",
                "La prioridad de la tarea cambió."
            );

        }


        if (
            action ===
            "delete"
        ) {

            tasks =
                tasks.filter(
                    function(item) {

                        return (
                            item.id !==
                            id
                        );

                    }
                );


            addNotification(
                "Tarea eliminada",
                `"${task.title}" fue eliminada.`,
                "fa-trash"
            );


            showToast(
                "Tarea eliminada",
                "La tarea ya no está en tu lista."
            );

        }


        saveTasks();

        renderAll();

    }
);


/* ==================================================
   FILTROS
================================================== */

filterButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                filterButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentFilter =
                    button.dataset.filter;


                renderTasks();

            }
        );

    }
);


sortTasks.addEventListener(
    "change",
    renderTasks
);


/* ==================================================
   ESTADÍSTICAS
================================================== */

function updateStats() {

    const total =
        tasks.length;


    const completed =
        tasks.filter(
            function(task) {

                return task.completed;

            }
        ).length;


    const pending =
        total -
        completed;


    const important =
        tasks.filter(
            function(task) {

                return (
                    task.priority ===
                    "important"
                );

            }
        ).length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (
                    completed /
                    total
                ) * 100
            );


    totalTasks.textContent =
        total;


    completedTasks.textContent =
        completed;


    pendingTasks.textContent =
        pending;


    importantTasks.textContent =
        important;


    navTaskCount.textContent =
        pending;


    progressPercentage.textContent =
        `${percentage}%`;


    progressCircleText.textContent =
        `${percentage}%`;


    progressCompleted.textContent =
        completed;


    progressPending.textContent =
        pending;


    productivityText.textContent =
        `${percentage}% completado`;


    const degrees =
        percentage * 3.6;


    progressCircle.style.background =
        `
            conic-gradient(
                var(--primary)
                ${degrees}deg,
                var(--surface-soft)
                ${degrees}deg
            )
        `;


    statsTotal.textContent =
        total;


    statsCompleted.textContent =
        completed;


    statsPending.textContent =
        pending;


    statsRate.textContent =
        `${percentage}%`;


    const completedWidth =
        total === 0
            ? 0
            : (
                completed /
                total
            ) * 100;


    const pendingWidth =
        total === 0
            ? 0
            : (
                pending /
                total
            ) * 100;


    const importantWidth =
        total === 0
            ? 0
            : (
                important /
                total
            ) * 100;


    completedBar.style.width =
        `${completedWidth}%`;


    pendingBar.style.width =
        `${pendingWidth}%`;


    importantBar.style.width =
        `${importantWidth}%`;


    updateAchievements(
        completed,
        total
    );


    updateStreak(
        completed
    );

}


/* ==================================================
   LOGROS
================================================== */

function updateAchievements(
    completed,
    total
) {

    achievementFirst.classList.toggle(
        "unlocked",
        total >= 1
    );


    achievementFive.classList.toggle(
        "unlocked",
        completed >= 5
    );


    achievementTen.classList.toggle(
        "unlocked",
        completed >= 10
    );

}


/* ==================================================
   RACHA
================================================== */

function updateStreak(
    completed
) {

    let streak = 0;


    if (
        completed > 0
    ) {

        const completedDates =
            tasks
                .filter(
                    function(task) {

                        return task.completed;

                    }
                )
                .map(
                    function(task) {

                        return task.date;

                    }
                );


        const uniqueDates =
            [
                ...new Set(
                    completedDates
                )
            ];


        const today =
            new Date();


        for (
            let i = 0;
            i < 365;
            i++
        ) {

            const date =
                new Date(
                    today
                );


            date.setDate(
                today.getDate() -
                i
            );


            const year =
                date.getFullYear();


            const month =
                String(
                    date.getMonth() + 1
                ).padStart(
                    2,
                    "0"
                );


            const day =
                String(
                    date.getDate()
                ).padStart(
                    2,
                    "0"
                );


            const value =
                `${year}-${month}-${day}`;


            if (
                uniqueDates.includes(
                    value
                )
            ) {

                streak++;

            } else {

                break;

            }

        }

    }


    streakNumber.textContent =
        streak;


    profileStreak.textContent =
        streak;


    const streakWidth =
        Math.min(
            streak * 10,
            100
        );


    streakProgress.style.width =
        `${streakWidth}%`;

}


/* ==================================================
   PERFIL
================================================== */

function renderProfile() {

    const name =
        profile.name ||
        "Alex";


    const username =
        profile.username ||
        "@alex";


    const bio =
        profile.bio ||
        "";


    const avatar =
        profile.avatar ||
        name.charAt(0).toUpperCase();


    sidebarName.textContent =
        name;


    sidebarUsername.textContent =
        username;


    welcomeName.textContent =
        name;


    profileName.textContent =
        name;


    profileUsername.textContent =
        username;


    profileBio.textContent =
        bio;


    sidebarAvatar.textContent =
        avatar;


    topbarAvatar.textContent =
        avatar;


    profileAvatar.textContent =
        avatar;


    editorAvatar.textContent =
        avatar;


    profileTaskCount.textContent =
        tasks.length;


    profileCompletedCount.textContent =
        tasks.filter(
            function(task) {

                return task.completed;

            }
        ).length;

}


function openProfileEditor() {

    profileNameInput.value =
        profile.name;


    profileUsernameInput.value =
        profile.username;


    profileBioInput.value =
        profile.bio;


    editorAvatar.textContent =
        profile.avatar;


    openModal(
        profileModal
    );

}


editProfileButton.addEventListener(
    "click",
    openProfileEditor
);


miniProfile.addEventListener(
    "click",
    openProfileEditor
);


topbarProfile.addEventListener(
    "click",
    function() {

        showSection(
            "perfil"
        );

    }
);


avatarEditButton.addEventListener(
    "click",
    openProfileEditor
);


closeProfileModal.addEventListener(
    "click",
    function() {

        closeModal(
            profileModal
        );

    }
);


cancelProfile.addEventListener(
    "click",
    function() {

        closeModal(
            profileModal
        );

    }
);


/* ==================================================
   GUARDAR PERFIL
================================================== */

profileForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        let username =
            profileUsernameInput.value.trim();


        if (
            username &&
            !username.startsWith("@")
        ) {

            username =
                `@${username}`;

        }


        profile = {

            name:
                profileNameInput.value.trim(),

            username:
                username,

            bio:
                profileBioInput.value.trim(),

            avatar:
                editorAvatar.textContent

        };


        saveProfile();

        renderProfile();

        closeModal(
            profileModal
        );


        addNotification(
            "Perfil actualizado",
            "Tus cambios fueron guardados.",
            "fa-user"
        );


        showToast(
            "Perfil actualizado",
            "Tus cambios fueron guardados."
        );

    }
);


/* ==================================================
   AVATAR ALEATORIO
================================================== */

const avatarLetters = [

    "A",
    "X",
    "K",
    "M",
    "D",
    "J",
    "R",
    "S",
    "T",
    "Z"

];


randomAvatarButton.addEventListener(
    "click",
    function() {

        const random =
            avatarLetters[
                Math.floor(
                    Math.random() *
                    avatarLetters.length
                )
            ];


        editorAvatar.textContent =
            random;

    }
);


/* ==================================================
   CATEGORÍAS
================================================== */

function renderCategories() {

    categoriesGrid.innerHTML =
        "";


    categories.forEach(
        function(category) {

            const count =
                tasks.filter(
                    function(task) {

                        return (
                            task.category ===
                            category.id
                        );

                    }
                ).length;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "category-card";


            card.style.setProperty(
                "--category-color",
                category.color
            );


            card.innerHTML = `

                <button
                    class="category-delete"
                    data-category-delete="${category.id}"
                    title="Eliminar categoría"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>


                <div class="category-icon">

                    <i
                        class="fa-solid ${category.icon}"
                    ></i>

                </div>


                <h3>
                    ${escapeHTML(category.name)}
                </h3>


                <p>
                    ${count}
                    ${
                        count === 1
                            ? " tarea"
                            : " tareas"
                    }
                </p>

            `;


            categoriesGrid.appendChild(
                card
            );

        }
    );

}


/* ==================================================
   NUEVA CATEGORÍA
================================================== */

newCategoryButton.addEventListener(
    "click",
    function() {

        categoryForm.reset();

        openModal(
            categoryModal
        );

        setTimeout(
            function() {

                categoryName.focus();

            },
            100
        );

    }
);


closeCategoryModal.addEventListener(
    "click",
    function() {

        closeModal(
            categoryModal
        );

    }
);


cancelCategory.addEventListener(
    "click",
    function() {

        closeModal(
            categoryModal
        );

    }
);


categoryForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            categoryName.value.trim();


        if (!name) {

            return;

        }


        const id =
            `custom-${Date.now()}`;


        const colors = [

            "#6366f1",
            "#3b82f6",
            "#10b981",
            "#f59e0b",
            "#ec4899",
            "#8b5cf6"

        ];


        const color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        categories.push({

            id:
                id,

            name:
                name,

            icon:
                "fa-folder",

            color:
                color

        });


        saveCategories();

        renderCategories();

        closeModal(
            categoryModal
        );


        showToast(
            "Categoría creada",
            `"${name}" está lista para usar.`
        );

    }
);


/* ==================================================
   ELIMINAR CATEGORÍA
================================================== */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "[data-category-delete]"
            );


        if (!button) {

            return;

        }


        const id =
            button.dataset.categoryDelete;


        if (
            [
                "personal",
                "estudio",
                "trabajo",
                "proyecto"
            ].includes(id)
        ) {

            showToast(
                "Categoría protegida",
                "Las categorías principales no se pueden eliminar."
            );

            return;

        }


        const category =
            categories.find(
                function(item) {

                    return (
                        item.id ===
                        id
                    );

                }
            );


        if (!category) {

            return;

        }


        const confirmed =
            confirm(
                `¿Eliminar la categoría "${category.name}"?`
            );


        if (!confirmed) {

            return;

        }


        categories =
            categories.filter(
                function(item) {

                    return (
                        item.id !==
                        id
                    );

                }
            );


        tasks.forEach(
            function(task) {

                if (
                    task.category ===
                    id
                ) {

                    task.category =
                        "personal";

                }

            }
        );


        saveCategories();

        saveTasks();

        renderAll();

        showToast(
            "Categoría eliminada",
            "Las tareas fueron movidas a Personal."
        );

    }
);


/* ==================================================
   CONFIGURACIÓN
================================================== */

function applySettings() {

    document.body.classList.toggle(
        "dark",
        settings.darkMode
    );


    document.body.classList.toggle(
        "no-animations",
        !settings.animations
    );


    darkMode.checked =
        settings.darkMode;


    notificationsEnabled.checked =
        settings.notifications;


    animationsEnabled.checked =
        settings.animations;


    applyColor(
        settings.color
    );


    colorOptions.forEach(
        function(option) {

            option.classList.toggle(
                "active",
                option.dataset.color ===
                settings.color
            );

        }
    );

}


darkMode.addEventListener(
    "change",
    function() {

        settings.darkMode =
            darkMode.checked;

        saveSettings();

        applySettings();

        showToast(
            "Tema actualizado",
            settings.darkMode
                ? "Modo oscuro activado."
                : "Modo claro activado."
        );

    }
);


notificationsEnabled.addEventListener(
    "change",
    function() {

        settings.notifications =
            notificationsEnabled.checked;

        saveSettings();

    }
);


animationsEnabled.addEventListener(
    "change",
    function() {

        settings.animations =
            animationsEnabled.checked;

        saveSettings();

        applySettings();

    }
);


/* ==================================================
   COLORES
================================================== */

function applyColor(
    color
) {

    document.documentElement.style.setProperty(
        "--primary",
        color
    );


    const darker =
        darkenColor(
            color,
            20
        );


    document.documentElement.style.setProperty(
        "--primary-dark",
        darker
    );

}


function darkenColor(
    hex,
    amount
) {

    let color =
        hex.replace(
            "#",
            ""
        );


    let number =
        parseInt(
            color,
            16
        );


    let red =
        Math.max(
            0,
            (
                number >> 16
            ) - amount
        );


    let green =
        Math.max(
            0,
            (
                (
                    number >> 8
                ) &
                0x00FF
            ) - amount
        );


    let blue =
        Math.max(
            0,
            (
                number &
                0x0000FF
            ) - amount
        );


    return (
        "#" +
        (
            blue |
            (
                green << 8
            ) |
            (
                red << 16
            )
        )
        .toString(16)
        .padStart(
            6,
            "0"
        )
    );

}


colorOptions.forEach(
    function(option) {

        option.addEventListener(
            "click",
            function() {

                const color =
                    option.dataset.color;


                settings.color =
                    color;


                saveSettings();

                applySettings();


                showToast(
                    "Color actualizado",
                    "La apariencia de Taskly cambió."
                );

            }
        );

    }
);


/* ==================================================
   EXPORTAR DATOS
================================================== */

exportDataButton.addEventListener(
    "click",
    function() {

        const data = {

            profile:
                profile,

            settings:
                settings,

            categories:
                categories,

            tasks:
                tasks,

            exportedAt:
                new Date().toISOString()

        };


        const json =
            JSON.stringify(
                data,
                null,
                4
            );


        const blob =
            new Blob(
                [json],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href =
            url;


        link.download =
            "taskly-backup.json";


        link.click();


        URL.revokeObjectURL(
            url
        );


        showToast(
            "Datos exportados",
            "Tu copia de seguridad está lista."
        );

    }
);


/* ==================================================
   RESTAURAR CONFIGURACIÓN
================================================== */

resetSettingsButton.addEventListener(
    "click",
    function() {

        const confirmed =
            confirm(
                "¿Quieres restaurar la configuración original?"
            );


        if (!confirmed) {

            return;

        }


        settings =
            {
                ...defaultSettings
            };


        saveSettings();

        applySettings();


        showToast(
            "Configuración restaurada",
            "Se recuperaron los valores originales."
        );

    }
);


/* ==================================================
   ELIMINAR TODOS LOS DATOS
================================================== */

deleteAllDataButton.addEventListener(
    "click",
    function() {

        const confirmed =
            confirm(
                "Esto eliminará tareas, perfil, categorías y configuración. ¿Continuar?"
            );


        if (!confirmed) {

            return;

        }


        localStorage.clear();


        profile =
            {
                ...defaultProfile
            };


        settings =
            {
                ...defaultSettings
            };


        categories =
            [
                ...defaultCategories
            ];


        tasks = [];

        notifications = [];


        saveProfile();

        saveSettings();

        saveCategories();

        saveTasks();

        saveNotifications();


        applySettings();

        renderAll();


        showToast(
            "Datos eliminados",
            "Taskly volvió a su estado inicial."
        );

    }
);


/* ==================================================
   BÚSQUEDA
================================================== */

function openSearch() {

    searchPanel.classList.add(
        "active"
    );


    setTimeout(
        function() {

            searchInput.focus();

        },
        100
    );

}


function closeSearchPanel() {

    searchPanel.classList.remove(
        "active"
    );

    searchInput.value = "";

}


searchButton.addEventListener(
    "click",
    function() {

        openSearch();

    }
);


closeSearch.addEventListener(
    "click",
    function() {

        closeSearchPanel();

        renderTasks();

    }
);


searchInput.addEventListener(
    "input",
    function() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            renderTasks();

            return;

        }


        const results =
            tasks.filter(
                function(task) {

                    return (
                        task.title
                            .toLowerCase()
                            .includes(query)
                        ||
                        task.description
                            .toLowerCase()
                            .includes(query)
                    );

                }
            );


        renderTaskList(
            allTaskList,
            results
        );


        showSection(
            "tareas"
        );


        openSearch();

    }
);


/* ==================================================
   NOTIFICACIONES
================================================== */

function addNotification(
    title,
    message,
    icon
) {

    if (
        !settings.notifications
    ) {

        return;

    }


    notifications.unshift({

        id:
            Date.now(),

        title:
            title,

        message:
            message,

        icon:
            icon,

        time:
            new Date().toISOString()

    });


    notifications =
        notifications.slice(
            0,
            20
        );


    saveNotifications();

    renderNotifications();

}


function renderNotifications() {

    notificationsList.innerHTML =
        "";


    if (
        notifications.length ===
        0
    ) {

        notificationsList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">

                    <i class="fa-regular fa-bell"></i>

                </div>

                <h3>
                    Sin novedades
                </h3>

                <p>
                    Aquí aparecerá tu actividad reciente.
                </p>

            </div>

        `;

        notificationDot.style.display =
            "none";

        return;

    }


    notificationDot.style.display =
        "block";


    notifications.forEach(
        function(item) {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "notification-item";


            element.innerHTML = `

                <div class="notification-icon">

                    <i
                        class="fa-solid ${item.icon}"
                    ></i>

                </div>


                <div>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <p>
                        ${escapeHTML(item.message)}
                    </p>

                    <time>
                        ${formatRelativeTime(item.time)}
                    </time>

                </div>

            `;


            notificationsList.appendChild(
                element
            );

        }
    );

}


function formatRelativeTime(
    dateString
) {

    const date =
        new Date(
            dateString
        );


    const now =
        new Date();


    const difference =
        Math.floor(
            (
                now -
                date
            ) / 1000
        );


    if (
        difference < 60
    ) {

        return "Ahora mismo";

    }


    const minutes =
        Math.floor(
            difference / 60
        );


    if (
        minutes < 60
    ) {

        return `Hace ${minutes} min`;

    }


    const hours =
        Math.floor(
            minutes / 60
        );


    if (
        hours < 24
    ) {

        return `Hace ${hours} h`;

    }


    const days =
        Math.floor(
            hours / 24
        );


    return `Hace ${days} día${days === 1 ? "" : "s"}`;

}


notificationButton.addEventListener(
    "click",
    function() {

        notificationsPanel.classList.toggle(
            "active"
        );

    }
);


closeNotifications.addEventListener(
    "click",
    function() {

        notificationsPanel.classList.remove(
            "active"
        );

    }
);


/* ==================================================
   TOAST
================================================== */

function showToast(
    title,
    message
) {

    toastTitle.textContent =
        title;


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* ==================================================
   CERRAR PANELES
================================================== */

function closeAllPanels() {

    notificationsPanel.classList.remove(
        "active"
    );

    closeSearchPanel();

}


/* ==================================================
   ESCAPE HTML
================================================== */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* ==================================================
   TECLA ESCAPE
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        closeMenu();

        closeAllModals();

        closeAllPanels();

    }
);


/* ==================================================
   CERRAR MODAL AL HACER CLICK FUERA
================================================== */

document
    .querySelectorAll(
        ".modal"
    )
    .forEach(
        function(modal) {

            modal.addEventListener(
                "click",
                function(event) {

                    if (
                        event.target ===
                        modal
                    ) {

                        closeModal(
                            modal
                        );

                    }

                }
            );

        }
    );


/* ==================================================
   RENDER GENERAL
================================================== */

function renderAll() {

    renderProfile();

    renderTasks();

    renderCategories();

    updateStats();

    renderNotifications();

}


/* ==================================================
   INICIALIZAR
================================================== */

function init() {

    setDate();

    applySettings();

    setDefaultTaskDate();

    renderAll();

}


init();

